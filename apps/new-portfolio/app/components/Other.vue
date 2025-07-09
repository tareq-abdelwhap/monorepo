<script lang="ts" setup>
const portfolioStore = usePortfolioStore();
const { skills } = storeToRefs(portfolioStore);

const frontendSkills = computed(() =>
  skills.value.filter(skill => skill.type === 'other')
);
</script>

<template>
  <div
    class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 sm:gap-y-8 w-full"
  >
    <div
      v-for="(skill, index) in frontendSkills"
      :key="skill.name"
      :class="[
        `relative px-2 sm:px-3 md:px- sm:py-2 rounded-2xl bg-transparent content-center border ${skill.borderColor}`,
      ]"
      v-motion
      :initial="{ opacity: 0, y: 40 }"
      :enter="{
        opacity: 1,
        y: 0,
        transition: { duration: 800, delay: index * 50 },
      }"
    >
      <div class="relative z-10">
        <Icon
          :name="skill.icon"
          :class="[
            'text-2xl sm:text-3xl md:text-4xl text-white',
            'absolute -top-6 sm:-top-8 md:-top-10',
            'overflow-hidden',
          ]"
        />
        <div class="flex justify-between content-center my-2">
          <h3
            class="text-xs sm:text-md md:text-xl lg:text-2xl font-semibold text-white"
          >
            {{ skill.name }}
          </h3>
          <p class="self-center text-xs sm:text-sm">
            {{ `${skill.duration}` }}
          </p>
        </div>
        <span
          v-if="skill.new"
          :class="[
            'text-xs sm:font-semibold bg-green-900 px-2 sm:px-3 sm:py-1 rounded-full absolute -top-4 sm:-top-6 md:-top-7 right-0',
          ]"
        >
          Learning...
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
