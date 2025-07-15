<script lang="ts" setup async>
const containerRef = ref(null);

const {
  currentSectionIndex,
  slides,
  swiperChange,
  svgSize,
  paths,
  pathClick,
  hydratedComponents,
} = usePortfolioController(containerRef);
</script>

<template>
  <div ref="container" class="relative h-screen w-full overflow-hidden">
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
                :is="hydratedComponents[currentSectionIndex]"
                v-if="idx === currentSectionIndex"
                :data="slide.data"
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
