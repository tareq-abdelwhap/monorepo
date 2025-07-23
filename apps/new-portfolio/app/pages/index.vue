<script setup lang="ts">
const supabase = useSupabaseClient();
const user = useSupabaseUser();

const loading = ref(true);
const home = ref<any>({ name: '', job_title: '', summary: '', slug: '' });
const experiences = ref<any[]>([]);
const skills = ref<any[]>([]);
const pages = ref<any[]>([]);

const openSection = ref<string | null>('home');

const toggleSection = (key: string) => {
  openSection.value = openSection.value === key ? null : key;
};

// ---------- Fetch Data ----------
const loadData = async () => {
  loading.value = true;

  const [
    { data: homeData },
    { data: expData },
    { data: skillData },
    { data: pageData },
  ] = await Promise.all([
    supabase
      .from('homes')
      .select('*')
      .eq('user_id', user.value?.id)
      .maybeSingle(),
    supabase.from('experiences').select('*').eq('user_id', user.value?.id),
    supabase.from('skills').select('*').eq('user_id', user.value?.id),
    supabase.from('pages').select('*').eq('user_id', user.value?.id),
  ]);

  home.value = homeData || {
    name: '',
    job_title: '',
    summary: '',
    slug: '',
    user_id: user.value?.id,
  };
  experiences.value = expData || [];
  skills.value = skillData || [];
  pages.value = pageData || [];
  loading.value = false;
};

onMounted(loadData);

// ---------- CRUD Functions ----------
const homeLoading = ref(false);
const saveHome = async () => {
  homeLoading.value = true;
  if (!home.value.id) {
    const { data } = await supabase
      .from('homes')
      .insert({ ...home.value, user_id: user.value?.id })
      .select()
      .single();
    home.value = data;
  } else {
    await supabase.from('homes').update(home.value).eq('id', home.value.id);
  }

  homeLoading.value = false;
};

const addPage = async () => {
  const { data } = await supabase
    .from('pages')
    .insert({
      title: 'New Page',
      slug: 'tareq-abdelwhap',
      user_id: user.value?.id,
    })
    .select()
    .single();
  pages.value.push(data);
};

const updatePage = async (page: any) => {
  await supabase.from('pages').update(page).eq('id', page.id);
};

const deletePage = async (id: number) => {
  if (confirm('Are you sure you want to delete this page?')) {
    await supabase.from('pages').delete().eq('id', id);
    pages.value = pages.value.filter(p => p.id !== id);
  }
};

const addSkill = async () => {
  const { data } = await supabase
    .from('skills')
    .insert({
      name: 'New Skill',
      user_id: user.value?.id,
    })
    .select()
    .single();
  skills.value.push(data);
};

const updateSkill = async (s: any) => {
  await supabase.from('skills').update(s).eq('id', s.id);
};

const deleteSkill = async (id: number) => {
  if (confirm('Are you sure you want to delete this skill?')) {
    await supabase.from('skills').delete().eq('id', id);
    skills.value = skills.value.filter(s => s.id !== id);
  }
};

const addExperience = async () => {
  const { data } = await supabase
    .from('experiences')
    .insert({
      position: 'New Position',
      user_id: user.value?.id,
    })
    .select()
    .single();
  experiences.value.push(data);
};

const updateExperience = async (e: any) => {
  await supabase.from('experiences').update(e).eq('id', e.id);
};

const deleteExperience = async (id: number) => {
  if (confirm('Are you sure you want to delete this experience?')) {
    await supabase.from('experiences').delete().eq('id', id);
    experiences.value = experiences.value.filter(e => e.id !== id);
  }
};

/* New Things */
const selectedPage = ref<any>(0);

let dragIndex: any = null;

const handleDragStart = (index: any) => {
  dragIndex = index;
};

const handleDrop = (dropIndex: any) => {
  if (dragIndex === null || dragIndex === dropIndex) return;

  const updated = [...pages.value];
  const [movedItem] = updated.splice(dragIndex, 1);
  updated.splice(dropIndex, 0, movedItem);
  pages.value = updated;
  dragIndex = null;

  console.log(pages.value.map(p => p.order));
};
</script>

<template>
  <div class="flex bg-black text-white h-full overflow-auto pb-8">
    <div class="shrink flex items-center w-1/5">
      <ul class="flex flex-col gap-4 px-4 w-full">
        <li
          v-for="(page, idx) in pages"
          :key="page.id"
          class="p-2 rounded-lg border border-white/10 text-2xl cursor-pointer flex items-center gap-2 hover:bg-gray-800 transition-colors duration-200"
          :class="{ 'bg-gray-800': selectedPage === idx }"
          draggable="true"
          @dragstart="() => handleDragStart(idx)"
          @dragover.prevent
          @drop="() => handleDrop(idx)"
          @click="() => (selectedPage = idx)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 cursor-move"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16"
            />
          </svg>

          <span v-text="page.title" />
          <span class="text-xs mt-auto" v-text="page.component" />

          <span
            :class="[
              'ms-auto text-sm bg-red-600 p-1 rounded',
              'flex items-center justify-center',
              'cursor-pointer hover:bg-red-500 transition-colors duration-200',
            ]"
            @click.stop="() => deletePage(page.id)"
          >
            🗑️
          </span>
        </li>

        <li
          class="p-2 rounded-lg border border-white/10 text-2xl cursor-pointer bg-green-900 hover:bg-green-700 flex items-center gap-2 transition-all duration-200"
          @click="addPage"
        >
          ➕ Add Page
        </li>
      </ul>
    </div>

    <form
      :class="[
        'grow max-w-5xl mx-auto flex flex-col gap-4 h-fit self-center',
        'bg-gray-800 p-6 rounded-xl shadow-lg',
        'grid grid-cols-2',
      ]"
      @submit.prevent="saveHome"
    >
      <!-- Home Section -->
      <template v-if="pages[selectedPage]?.component.toLowerCase() === 'home'">
        <div
          v-for="[key, value] in Object.entries(home).filter(
            ([key]) => !['id', 'user_id', 'created_at'].includes(key)
          )"
          :class="['flex flex-col gap-2', key === 'summary' && 'col-span-2']"
        >
          <label
            :for="key"
            class="block text-sm ms-1"
            v-text="key.replace('_', ' ').toUpperCase()"
          />

          <u-select-menu
            v-if="key === 'page_id'"
            v-model="home[key]"
            :id="key"
            :items="pages"
            value-key="id"
            label-key="title"
            size="xl"
          />

          <u-textarea
            v-else-if="key === 'summary'"
            v-model="home[key]"
            :id="key"
            placeholder="summary"
            size="xl"
          />

          <u-input
            v-else
            v-model="home[key]"
            :id="key"
            placeholder="Your Name"
            size="xl"
          />
          <!-- <input
            v-else
            v-model="home[key]"
            :id="key"
            placeholder="Your Name"
            class="w-full p-2 bg-gray-700 text-white rounded border border-white/10 focus:outline-none"
          /> -->
        </div>

        <u-button
          class="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition cursor-pointer w-fit"
          type="submit"
          :loading="homeLoading"
          label="💾 Save Home"
        />
      </template>
    </form>

    <div class="shrink max-w-5xl mx-auto space-y-12">
      <!-- Skills -->
      <section class="bg-gray-900 p-6 rounded-xl shadow space-y-4">
        <button
          @click="toggleSection('skills')"
          class="w-full text-left text-xl font-semibold mb-2"
        >
          ▶️ Skills
        </button>
        <div v-show="openSection === 'skills'">
          <div class="flex justify-between items-center">
            <h2 class="text-2xl font-semibold">Skills</h2>
            <button
              @click="addSkill"
              class="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
            >
              ➕ Add Skill
            </button>
          </div>
          <div
            v-for="skill in skills"
            :key="skill.id"
            class="grid md:grid-cols-2 gap-3 bg-gray-800 p-4 rounded-lg"
          >
            <input
              v-model="skill.name"
              class="w-full p-2 bg-gray-700 text-white rounded border border-white/10 mb-2 focus:outline-none"
              placeholder="Name"
            />
            <input
              v-model="skill.category"
              class="w-full p-2 bg-gray-700 text-white rounded border border-white/10 mb-2 focus:outline-none"
              placeholder="Category"
            />
            <input
              v-model="skill.duration"
              type="number"
              class="w-full p-2 bg-gray-700 text-white rounded border border-white/10 mb-2 focus:outline-none"
              placeholder="Duration (months)"
            />
            <label class="inline-flex items-center gap-2 text-sm">
              <input type="checkbox" v-model="skill.new" class="accent-white" />
              New
            </label>
            <div class="col-span-2 flex gap-2">
              <button
                class="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
                @click="updateSkill(skill)"
              >
                💾 Update
              </button>
              <button
                class="bg-red-600 text-black px-4 py-2 rounded hover:bg-gray-200 transition bg-red-600 text-white"
                @click="deleteSkill(skill.id)"
              >
                🗑 Delete
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Experiences -->
      <section class="bg-gray-900 p-6 rounded-xl shadow space-y-4">
        <button
          @click="toggleSection('experiences')"
          class="w-full text-left text-xl font-semibold mb-2"
        >
          ▶️ Experiences
        </button>
        <div v-show="openSection === 'experiences'">
          <div class="flex justify-between items-center">
            <h2 class="text-2xl font-semibold">Experiences</h2>
            <button
              @click="addExperience"
              class="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
            >
              ➕ Add Experience
            </button>
          </div>
          <div
            v-for="exp in experiences"
            :key="exp.id"
            class="grid md:grid-cols-2 gap-3 bg-gray-800 p-4 rounded-lg"
          >
            <input
              v-model="exp.position"
              class="w-full p-2 bg-gray-700 text-white rounded border border-white/10 mb-2 focus:outline-none"
              placeholder="Position"
            />
            <input
              v-model="exp.company"
              class="w-full p-2 bg-gray-700 text-white rounded border border-white/10 mb-2 focus:outline-none"
              placeholder="Company"
            />
            <input
              v-model="exp.tags"
              class="w-full p-2 bg-gray-700 text-white rounded border border-white/10 mb-2 focus:outline-none"
              placeholder="Tags"
            />
            <textarea
              v-model="exp.responsibilities"
              class="w-full p-2 bg-gray-700 text-white rounded border border-white/10 mb-2 focus:outline-none"
              placeholder="Responsibilities"
            ></textarea>
            <input
              v-model="exp.from"
              class="w-full p-2 bg-gray-700 text-white rounded border border-white/10 mb-2 focus:outline-none"
              placeholder="From Date"
            />
            <div class="col-span-2 flex gap-2">
              <button
                class="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
                @click="updateExperience(exp)"
              >
                💾 Update
              </button>
              <button
                class="bg-red-600 text-black px-4 py-2 rounded hover:bg-gray-200 transition bg-red-600 text-white"
                @click="deleteExperience(exp.id)"
              >
                🗑 Delete
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped></style>
