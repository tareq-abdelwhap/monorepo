<script lang="ts" setup>
const PortfolioStore = usePortfolioStore();
const { experiences } = storeToRefs(PortfolioStore);

callOnce(() => experiences.value.reverse());
</script>

<template>
  <div
    class="w-full flex flex-wrap gap-y-8 sm:gap-y-10 max-h-full pb-6 sm:pb-16"
  >
    <div
      class="grid grid-cols-1 sm:grid-cols-6 sm:gap-y-2 sm:gap-x-5 w-full"
      v-for="(experience, index) in experiences"
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
          'sm:col-span-1',
          'text-xs sm:text-sm text-start sm:text-end sm:border-e border-slate-600 pe-3 sm:pe-5',
        ]"
      >
        {{ experience.date.join(' - ') }}
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
            class="text-xs px-2 py-1 me-2 bg-zinc-700 rounded-full inline-block mt-1"
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
            :key="skill.name"
            :class="[
              'text-xs sm:text-sm px-2 sm:px-3 mt-1 inline-block rounded-full border',
              `${skill.borderColor} ${skill.color}`,
            ]"
          >
            {{ skill.name }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
