<script lang="ts" setup>
const education = ref([
  {
    degree: 'Bachelor of Commerce',
    institution: 'Ain Shams Academy',
    date: 'JUN 2019',
  },
  {
    degree: 'PHP Full Stack Web Development',
    institution: 'Russian Computer Center',
    date: 'FEB 2020',
  },
]);
</script>

<template>
  <div class="w-full max-w-3xl mx-auto">
    <h2 class="text-4xl font-bold mb-8 text-center">Education</h2>
    <div class="space-y-8">
      <div
        v-for="(edu, index) in education"
        :key="index"
        class="bg-slate-800 rounded-lg p-6"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: { duration: 500, delay: index * 200 },
        }"
      >
        <h3 class="text-2xl font-semibold mb-2">{{ edu.degree }}</h3>
        <p class="text-lg text-slate-400 mb-2">{{ edu.institution }}</p>
        <p class="text-md text-slate-500">{{ edu.date }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
