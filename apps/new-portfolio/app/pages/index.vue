<script lang="ts" setup>
import { hydrateOnVisible } from 'vue';
// @ts-expect-error missing types for vue-preloader
import { VuePreloader } from 'vue-preloader';
import '../node_modules/vue-preloader/dist/style.css';

const layoutStore = useLayoutStore();
const { currentSectionIndex, slides } = storeToRefs(layoutStore);

const svgSize = ref(1000);

const coordinatesFromDegree = (degree: number, radius: number) => {
  const angleInRadians = degree * (Math.PI / 180);
  const y = Math.round(Math.sin(angleInRadians) * radius);
  const x = Math.round(Math.cos(angleInRadians) * radius);
  return { x, y };
};

const degree = 360 / slides.value.length;
const currentRotation = ref(-currentSectionIndex.value * degree); // usually 0 at start

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
  currentRotation.value += -deltaIndex * degree;

  // Update index and swiper
  currentSectionIndex.value = index;
  swiper.instance.value?.slideTo(index);
};

const paths = computed(() => {
  const midSvgSize = svgSize.value / 2;
  const divisions = slides.value.length; // Should be a factor of 360
  const degree = 360 / divisions;
  const coords = coordinatesFromDegree(degree, midSvgSize);
  const d = `M 0,0 l ${midSvgSize},0 A ${midSvgSize},${midSvgSize},0,0,0,${
    coords.x
  },${-coords.y} L 0,0`;

  const transforms = [];
  const textTransforms = [];

  for (let i = 0; i < divisions; i += 1) {
    transforms.push(
      `rotate(${
        i * degree + degree / 2
      } ${midSvgSize} ${midSvgSize}) translate(${midSvgSize}, ${midSvgSize})`
    );
    textTransforms.push(
      `rotate(${
        i * degree
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
const containerRef = ref(null);
const swiper = useSwiper(containerRef, {});

const swiperChange = (event: CustomEvent) => {
  const [swiperInstance] = event.detail;
  pathClick(swiperInstance.realIndex); // Update the path click based on swiper index
};

const lazyHydrate = (component: any) => {
  return defineAsyncComponent({
    loader: () => import(`@/components/${component}.vue`),
    hydrate: hydrateOnVisible(),
  });
};
</script>

<template>
  <div ref="container" class="relative h-screen w-full overflow-hidden">
    <VuePreloader
      background-color="#000000"
      color="#ffffff"
      transition-type="fade-up"
      :loading-speed="25"
      :transition-speed="800"
      @loading-is-over="() => {}"
      @transition-is-over="() => {}"
    />

    <ClientOnly>
      <swiper-container
        ref="containerRef"
        class="h-full w-full"
        direction="vertical"
        effect="fade"
        :fade-effect="{ crossFade: true }"
        :speed="800"
        @swiperslidechange="swiperChange"
      >
        <swiper-slide v-for="(slide, idx) in slides" :key="idx">
          <div
            :class="[
              'grid grid-cols-5',
              'items-center justify-center h-full w-full after:content-[\'\'] after:absolute after:inset-0 after:bg-black/90',
            ]"
          >
            <img
              :src="slide.img"
              :alt="slide.title"
              :class="['absolute w-full h-full object-cover']"
            />

            <div class="z-50 text-white col-start-2 col-span-full px-12">
              <component
                :is="lazyHydrate(slide.component)"
                v-if="idx === currentSectionIndex"
              />
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
    </ClientOnly>

    <!-- Circle -->
    <div
      :class="[
        'absolute top-1/2 left-0 transform -translate-x-5/7 -translate-y-1/2 z-50',
      ]"
    >
      <svg :width="svgSize" :height="svgSize" class="z-50">
        <!-- Rotating group -->
        <g
          :transform="`rotate(${paths.rotation} ${svgSize / 2} ${svgSize / 2})`"
          class="transition-all duration-800 ease-in-out"
        >
          <path
            v-for="(transform, index) in paths.transforms"
            :key="index"
            :id="`path${index}`"
            :d="paths.d"
            :transform="transform"
            class="cursor-pointer fill-black/20 stroke-white stroke-2"
            @click="() => pathClick(index)"
          />
          <text
            v-for="(transform, index) in paths.textTransforms"
            :key="'text-' + index"
            :transform="transform"
            class="cursor-pointer stroke-white fill-white"
            @click="() => pathClick(index)"
          >
            <tspan dx="230" dy="35" class="text-5xl font-bold whitespace-wrap">
              {{ paths.sections[index]?.title }}
            </tspan>
          </text>
        </g>
      </svg>
    </div>
  </div>
</template>

<style scoped></style>
