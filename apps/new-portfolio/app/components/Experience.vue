<script lang="ts" setup>
const { data } = defineProps<{
  data: MyExperience[];
}>();

const portfolioStore = usePortfolioStore();
const { skills } = storeToRefs(portfolioStore);
</script>

<template>
  <div
    class="w-full flex flex-wrap gap-y-6 sm:gap-y-10 px-4 sm:px-8 pb-6 sm:pb-16"
  >
    <div
      class="grid grid-cols-1 sm:grid-cols-6 sm:gap-y-2 sm:gap-x-5 w-full"
      v-for="(experience, index) in data"
      :key="experience.company"
      v-motion
      :initial="{ opacity: 0, x: -30 }"
      :enter="{
        opacity: 1,
        x: 0,
        transition: { duration: 500, delay: index * 100 },
      }"
    >
      <div
        :class="[
          'sm:col-span-1 text-start sm:text-end',
          'text-[11px] sm:text-xs md:text-sm',
          'border-slate-600 pe-2 sm:pe-4 sm:border-e',
        ]"
      >
        {{ `${experience.from} - ${experience.to || 'Present'}` }}
      </div>
      <div class="sm:col-span-5">
        <h2 class="text-lg sm:text-xl md:text-2xl font-bold">
          {{ experience.company }}
        </h2>
        <p class="mb-2 text-sm sm:text-base">
          {{ experience.position }}
          <span
            v-for="tag in experience.tags"
            :key="tag"
            class="text-[10px] sm:text-xs px-2 sm:px-3 py-[2px] sm:py-1 me-2 bg-zinc-700 rounded-full inline-block mt-1"
          >
            {{ tag }}
          </span>
        </p>
        <ul
          class="hidden sm:block list-disc ps-4 sm:ps-6 md:ps-12 mb-2 text-sm sm:text-base"
        >
          <li
            v-for="responsibility in experience.responsibilities"
            :key="responsibility"
          >
            {{ responsibility }}
          </li>
        </ul>

        <div class="flex flex-wrap gap-2">
          <span
            v-for="skill in experience.skills"
            :key="skill"
            class="text-[10px] sm:text-xs md:text-sm px-2 sm:px-3 py-[2px] sm:py-1 mt-1 inline-block rounded-full border"
          >
            {{ skills.find(s => s.id === skill)?.name }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
