<script lang="ts" setup>
defineProps<{
  data: MyHome[];
}>();
</script>

<template>
  <div
    v-for="home in data"
    class="text-base text-slate-300 text-start flex flex-col gap-6 sm:gap-8 md:gap-10"
  >
    <!-- H3 -->
    <h3
      class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
      v-motion
      :initial="{ opacity: 0, x: -70 }"
      :enter="{ opacity: 1, x: 0, transition: { duration: 800 } }"
    >
      Hi, I'm
    </h3>

    <!-- H1 -->
    <h1
      class="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold"
      v-motion
      :initial="{ opacity: 0, x: -70 }"
      :enter="{ opacity: 1, x: 0, transition: { duration: 800 } }"
      v-text="home.name"
    />

    <!-- H2 -->
    <h2
      class="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold"
      v-motion
      :initial="{ opacity: 0, x: -70 }"
      :enter="{ opacity: 1, x: 0, transition: { duration: 800, delay: 500 } }"
      v-text="`a ${home.job_title}`"
    />

    <!-- Paragraph -->
    <p
      class="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold leading-6 sm:leading-7 md:leading-8 text-slate-500"
      v-motion
      :initial="{ opacity: 0, x: -70 }"
      :enter="{ opacity: 1, x: 0, transition: { duration: 800, delay: 600 } }"
      v-text="home.summary"
    />
  </div>
</template>

<style scoped></style>
