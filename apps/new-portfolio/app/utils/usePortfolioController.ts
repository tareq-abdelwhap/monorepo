import { hydrateOnVisible } from 'vue';

export const usePortfolioController = (containerRef: Ref) => {
  const portfolioStore = usePortfolioStore();
  const { currentSectionIndex, pages: slides } = storeToRefs(portfolioStore);

  const route = useRoute();
  const slug = computed(() => String(route.params.slug));

  portfolioStore.getData(slug.value);

  const svgSize = ref(1000);

  const coordinatesFromDegree = (degree: number, radius: number) => {
    const angleInRadians = degree * (Math.PI / 180);
    const y = Math.round(Math.sin(angleInRadians) * radius);
    const x = Math.round(Math.cos(angleInRadians) * radius);
    return { x, y };
  };

  // const degree = 360 / slides.value.length;
  // const currentRotation = ref(-currentSectionIndex.value * degree); // usually 0 at start

  const degree = computed(() =>
    slides.value.length > 0 ? 360 / slides.value.length : 0
  );

  const currentRotation = computed(
    () => -currentSectionIndex.value * degree.value
  );

  const pathClick = (index: number) => {
    if (currentSectionIndex.value === index) return;

    const total = slides.value.length;
    const degree = 360 / total;

    const currentIndex = currentSectionIndex.value;

    // Compute delta between the current index and the new index
    let deltaIndex = index - currentIndex;

    // Normalize to the shortest direction (-n/2 to n/2)
    if (deltaIndex > total / 2) deltaIndex -= total;
    if (deltaIndex < -total / 2) deltaIndex += total;

    // Apply the relative rotation
    // currentRotation.value += -deltaIndex * degree;

    // Update index and swiper
    currentSectionIndex.value = index;
    swiper.instance.value?.slideTo(index);
  };

  const paths = computed(() => {
    const len = slides.value.length;

    if (len === 0) {
      return {
        svgSize: svgSize.value,
        d: '',
        transforms: [],
        textTransforms: [],
        sections: [],
        rotation: 0,
      };
    }

    const midSvgSize = svgSize.value / 2;
    const deg = 360 / len;
    const coords = coordinatesFromDegree(deg, midSvgSize);

    const d = `M 0,0 l ${midSvgSize},0 A ${midSvgSize},${midSvgSize},0,0,0,${
      coords.x
    },${-coords.y} L 0,0`;

    const transforms = [];
    const textTransforms = [];

    for (let i = 0; i < len; i++) {
      transforms.push(
        `rotate(${
          i * deg + deg / 2
        } ${midSvgSize} ${midSvgSize}) translate(${midSvgSize}, ${midSvgSize})`
      );
      textTransforms.push(
        `rotate(${
          i * deg
        } ${midSvgSize} ${midSvgSize}) translate(${midSvgSize}, ${midSvgSize})`
      );
    }

    return {
      svgSize: svgSize.value,
      d,
      transforms,
      textTransforms,
      sections: slides.value,
      rotation: currentRotation.value,
    };
  });

  /* Scroll Control */
  const onScroll = useDebounceFn((event: WheelEvent) => {
    const isDown = event.deltaY > 0;

    if (isDown) {
      pathClick((currentSectionIndex.value + 1) % slides.value.length); // Move to the next section
    } else {
      pathClick(
        (currentSectionIndex.value - 1 + slides.value.length) %
          slides.value.length
      ); // Move to the previous section
    }
  }, 100);

  useEventListener(window, 'wheel', onScroll);

  useEventListener(window, 'keydown', (event: KeyboardEvent) => {
    if (event.key === 'ArrowUp') {
      pathClick(
        (currentSectionIndex.value - 1 + slides.value.length) %
          slides.value.length
      ); // Move to the previous section
    } else if (event.key === 'ArrowDown') {
      pathClick((currentSectionIndex.value + 1) % slides.value.length); // Move to the next section
    }
  });

  /* Swipper */
  const swiper = useSwiper(containerRef, {});

  const swiperChange = (event: CustomEvent) => {
    const [swiperInstance] = event.detail;
    console.log('swiper changed to', swiperInstance.realIndex);
    pathClick(swiperInstance.realIndex); // Update the path click based on swiper index
  };

  const hydratedComponents = computed(() =>
    slides.value.map(slide =>
      defineAsyncComponent({
        loader: () => import(`@/components/${slide.component}.vue`),
        hydrate: hydrateOnVisible(),
      })
    )
  );

  return {
    currentSectionIndex,
    slides,
    swiperChange,
    svgSize,
    paths,
    pathClick,
    hydratedComponents,
  };
};
