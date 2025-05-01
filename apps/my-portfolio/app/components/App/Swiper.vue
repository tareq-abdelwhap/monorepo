<script lang="ts" setup>
const SwiperStore = useSwiperStore();

const { activeSlide, slides } = storeToRefs(SwiperStore);
slides.value = slides.value.map((slide, index) => ({
  title: slide.title,
  component: SwiperStore.lazyHydrate(
    () => import(`@/components/Portfolio/${slide.component}.vue`)
  ),
}));
</script>

<template>
  <div class="h-full">
    <Swiper
      class="h-full position-fixed top-0 w-full"
      :modules="[SwiperMousewheel, SwiperKeyboard]"
      direction="vertical"
      :slidesPerView="1"
      :spaceBetween="0"
      mousewheel
      keyboard
      @swiper="SwiperStore.onSwiper"
      @slideChange="SwiperStore.onSliderChange"
    >
      <SwiperSlide v-for="(slide, index) in slides" :key="index">
        <div
          class="flex items-center justify-center h-full w-5/6 max-w-[1600px] mx-auto overflow-hidden"
        >
          <component :is="slide.component" v-if="index === activeSlide" />
        </div>
      </SwiperSlide>
    </Swiper>

    <!-- Swiper controls instructions -->
    <div
      :class="[
        'hidden sm:block opacity-0', // for animation
        'fixed bottom-8 left-5 flex flex-col items-start text-slate-300 transition-opacity duration-500 z-10',
      ]"
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0, transition: { delay: 800, duration: 500 } }"
    >
      <div class="flex items-start mb-2">
        <icon name="mdi:mouse" class="w-6 h-6 mr-2" />
        <span>Scroll to navigate</span>
      </div>
      <div class="flex items-start">
        <icon name="mdi:keyboard" class="w-6 h-6 mr-2" />
        <span>Use arrow keys to navigate</span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
