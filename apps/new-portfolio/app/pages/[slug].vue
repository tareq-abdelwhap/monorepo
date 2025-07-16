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
  <div class="relative h-screen w-full overflow-hidden">
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
          <BaseContainer
            :class="[
              'relative',
              'grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5',
              'items-center justify-center h-screen w-full',
              'after:content-[\'\'] after:fixed after:inset-0 after:bg-black/90',
            ]"
          >
            <img
              :src="slide.img"
              :alt="slide.title"
              :class="['fixed inset-0 w-full h-full object-cover']"
            />

            <div
              class="z-50 text-white col-span-1 sm:col-span-2 lg:col-start-2 lg:col-span-full px-4 sm:px-8 md:px-12"
            >
              <component
                :is="hydratedComponents[currentSectionIndex]"
                v-if="idx === currentSectionIndex"
                :data="slide.data"
              />

              <!-- Circle -->
              <div
                :class="[
                  'absolute transform z-50',
                  '-top-65 sm:top-1/2 -start-15 sm:start-0',
                  '-translate-y-25 sm:-translate-y-1/2',
                  '-translate-x-1/2 sm:-translate-x-5/7',
                  'scale-[0.30] sm:scale-90 md:scale-100 origin-center',
                ]"
              >
                <svg :width="svgSize" :height="svgSize" class="z-50">
                  <!-- Rotating group -->
                  <g
                    :transform="`rotate(${paths.rotation} ${svgSize / 2} ${
                      svgSize / 2
                    })`"
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
                      :class="[
                        'cursor-pointer stroke-white fill-white',
                        currentSectionIndex !== index && 'opacity-40',
                        'transition-all duration-800 ease-in-out',
                      ]"
                      @click="() => pathClick(index)"
                    >
                      <tspan
                        dx="230"
                        dy="35"
                        class="text-5xl font-bold whitespace-wrap"
                      >
                        {{ paths.sections[index]?.title }}
                      </tspan>
                    </text>
                  </g>
                </svg>
              </div>
            </div>
          </BaseContainer>
        </swiper-slide>
      </swiper-container>
    </ClientOnly>
  </div>
</template>

<style scoped></style>
