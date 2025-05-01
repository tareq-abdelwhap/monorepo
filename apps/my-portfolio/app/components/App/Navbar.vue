import { Motion } from '../../../.nuxt/components';
<script lang="ts" setup>
const SwiperStore = useSwiperStore();

const { slides, activeSlide } = storeToRefs(SwiperStore);
</script>

<template>
  <div class="absolute flex top-5 -translate-x-1/2 left-1/2 z-10">
    <ul
      :class="[
        'flex gap-2 sm:gap-5 text-center px-2 sm:px-3 py-2 rounded-full',
        'bg-white bg-opacity-5 backdrop-blur-md shadow-lg',
        'overflow-x-auto sm:overflow-x-visible whitespace-nowrap',
      ]"
      v-motion
      :initial="{ y: -70 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
    >
      <li
        v-for="(slide, index) in slides"
        :key="index"
        :class="[
          'cursor-pointer text-xs sm:text-sm md:text-lg rounded-full',
          'hover:text-slate-300 px-2 sm:px-3',
          'transition-[color transform] duration-200 ease-in-out',
          'flex items-center justify-center',
          activeSlide === index
            ? 'text-slate-300 bg-primary bg-opacity-10 backdrop-blur-md shadow-lg scale-110'
            : 'text-slate-500',
        ]"
        @click="SwiperStore.swipeTo(index)"
      >
        {{ slide.title }}
      </li>
    </ul>

    <ul
      :class="[
        'absolute -end-16 hidden sm:flex text-center px-1 py-2 rounded-full',
      ]"
      v-motion
      :initial="{ y: -70 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
    >
      <li
        :class="[
          'cursor-pointer text-lg rounded-full',
          'hover:text-slate-300 px-2',
          'transition-[color transform] duration-200 ease-in-out',
          'flex items-center justify-center',
          'text-slate-500',
        ]"
      >
        <a
          href="https://www.linkedin.com/in/tareq-abdelwhap"
          target="_blank"
          class="w-7 h-7"
        >
          <Icon name="entypo-social:linkedin-with-circle" class="w-8 h-8" />
        </a>
      </li>
      <!-- <li
        :class="[
          'cursor-pointer text-lg rounded-full',
          'hover:text-slate-300 px-2',
          'transition-[color transform] duration-200 ease-in-out',
          'flex items-center justify-center',
          'text-slate-500',
        ]"
      >
        <Icon name="bytesize:github" class="w-7 h-7" />
      </li> -->
    </ul>
  </div>
  <!-- <div class="absolute top-5 right-5 z-10">
    <language-switcher />
  </div> -->
</template>

<style scoped></style>
