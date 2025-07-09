export const useLayoutStore = defineStore('layoutStore', () => {
  const currentSectionIndex = ref(0);
  const slides = ref([
    { title: 'Home', img: '/imgs/slider01.jpg', component: 'Home' },
    { title: 'Frontend', img: '/imgs/slider02.jpg', component: 'Frontend' },
    { title: 'Backend', img: '/imgs/slider03.jpg', component: 'Backend' },
    { title: 'Other', img: '/imgs/slider04.jpg', component: 'Other' },
    { title: 'Experience', img: '/imgs/slider05.jpg', component: 'Experience' },
  ]);

  return {
    currentSectionIndex,
    slides,
  };
});
