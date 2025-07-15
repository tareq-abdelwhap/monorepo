<script lang="ts" setup>
defineProps<{
  data: MyHome[];
}>();
</script>

<template>
  <div
    v-for="home in data"
    class="text-base text-slate-300 text-start flex flex-col gap-10"
  >
    <h3
      class="text-6xl font-bold"
      v-motion
      :initial="{ opacity: 0, x: -70 }"
      :enter="{ opacity: 1, x: 0, transition: { duration: 800 } }"
    >
      Hi, I'm
    </h3>

    <h1
      class="text-9xl font-bold"
      v-motion
      :initial="{ opacity: 0, x: -70 }"
      :enter="{ opacity: 1, x: 0, transition: { duration: 800 } }"
      v-text="home.name"
    />

    <h2
      class="text-7xl font-semibold"
      v-motion
      :initial="{ opacity: 0, x: -70 }"
      :enter="{ opacity: 1, x: 0, transition: { duration: 800, delay: 500 } }"
      v-text="`a ${home.jobTitle}`"
    />

    <p
      class="text-2xl font-semibold leading-8 text-slate-500"
      v-motion
      :initial="{ opacity: 0, x: -70 }"
      :enter="{ opacity: 1, x: 0, transition: { duration: 800, delay: 600 } }"
      v-text="home.summary"
    />
  </div>
</template>

<style scoped></style>
