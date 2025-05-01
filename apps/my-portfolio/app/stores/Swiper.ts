import { hydrateOnVisible } from 'vue';

export const useSwiperStore = defineStore('SwiperStore', () => {
  const swiper = ref<any>();
  const activeSlide = ref(0);

  const slides = shallowRef([
    {
      title: 'Home',
      component: 'Home',
    },
    // {
    //   title: 'Summary',
    //   component: 'Summary',
    // },
    {
      title: 'Skills',
      component: 'Skills',
    },
    {
      title: 'Experience',
      component: 'WorkHistory',
    },
    // {
    //   title: 'Education',
    //   component: 'Education',
    // },
  ]);

  const lazyHydrate = (importLoader: () => Promise<any>) => {
    return defineAsyncComponent({
      loader: importLoader,
      hydrate: hydrateOnVisible(),
    });
  };

  const onSwiper = (swiperInstance: any) => (swiper.value = swiperInstance);

  const onSliderChange = () =>
    (activeSlide.value = swiper.value?.activeIndex as number);

  const swipeTo = (index: number) => swiper.value?.slideTo(index);

  return {
    swiper,

    activeSlide,
    slides,

    lazyHydrate,
    onSwiper,
    onSliderChange,
    swipeTo,
  };
});
