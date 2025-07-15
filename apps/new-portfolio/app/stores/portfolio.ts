export const usePortfolioStore = defineStore('portfolioStore', () => {
  const supabase = useSupabaseClient();

  /* Slides */
  const currentSectionIndex = ref(0);
  const pages = ref<MyPages[]>([]);
  const skills = ref<MySkills[]>([]);
  const experiences = ref<MyExperience[]>([]);

  /* Data */
  const getData = async (slug: string) => {
    const tables = ['pages', 'homes', 'skills', 'experiences'];
    const res = await Promise.all<any>([
      ...tables.map(table => {
        const query = supabase.from(table).select().eq('slug', slug);

        if (table === 'pages') {
          query.order('order', { ascending: true });
        } else if (table === 'experiences') {
          query.order('from', { ascending: false });
        }

        return query;
      }),
    ]);

    const errorMessages = res
      .map(e => e.error?.message)
      .filter(Boolean)
      .join(', ');

    if (errorMessages) throw errorMessages;

    const resData = res.flatMap(e => e.data);

    skills.value = res[tables.findIndex(e => e === 'skills')].data;

    experiences.value = res[tables.findIndex(e => e === 'experiences')].data;

    pages.value = resData.reduce((acc, item) => {
      if (!item.page_id) {
        acc.push({
          ...item,
          data: resData.filter(e => e.page_id === item.id),
        });
      }
      return acc;
    }, []);
  };

  return {
    currentSectionIndex,
    pages,
    skills,
    experiences,

    getData,
  };
});
