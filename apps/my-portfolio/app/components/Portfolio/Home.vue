<script lang="ts" setup>
const PortfolioStore = usePortfolioStore();
const { basic } = storeToRefs(PortfolioStore);
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 h-full gap-8 md:gap-0">
    <div
      :class="[
        'opacity-0', // for animation
        'col-span-1 text-base sm:text-xl md:text-2xl lg:text-3xl text-slate-300 text-start self-center px-4 sm:px-8 md:px-12 lg:ms-20 leading-relaxed',
      ]"
      v-motion
      :initial="{ opacity: 0, x: -70 }"
      :enter="{ opacity: 1, x: 0, transition: { duration: 800 } }"
    >
      <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
        {{ basic.name }}
      </h1>
      <p class="mb-4">{{ basic.role }}</p>
      <p
        class="leading-6 text-slate-500 text-sm sm:text-base md:text-lg lg:text-xl"
      >
        {{ basic.description }}
      </p>
    </div>
    <div
      class="hidden sm:flex col-span-1 self-end justify-center md:justify-end"
    >
      <img
        :src="basic.me"
        alt="Tareq Abdelwhap"
        ref="img"
        :class="[
          'opacity-0', // for animation
        ]"
        v-motion
        :initial="{ opacity: 0, y: 70 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-indigo-950 to-transparent to-25%"
      ></div>
    </div>
  </div>
</template>

<style scoped></style>
