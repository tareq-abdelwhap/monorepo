<script lang="ts" setup>
const PortfolioStore = usePortfolioStore();
const { skills } = storeToRefs(PortfolioStore);
</script>

<template>
  <div class="w-full max-h-full pb-6 sm:pb-16">
    <div
      v-for="level_01 in skills"
      :key="level_01.name"
      class="border-b pb-8 mb-1 sm:mb-8 border-slate-700 w-full"
    >
      <h2
        class="text-lg sm:text-3xl md:text-4xl font-bold my-1 sm:my-8 text-start px-4 sm:px-0"
        v-motion
        :initial="{ opacity: 0, x: -70 }"
        :enter="{ opacity: 1, x: 0, transition: { duration: 800 } }"
      >
        {{ level_01.name }}
      </h2>
      <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 sm:gap-y-8 w-full"
      >
        <div
          v-for="(skill, index) in level_01.skills.filter(s => s.show)"
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
          <!-- <div class="absolute inset-0 opacity-50 mix-blend-overlay"></div> -->
          <div class="relative z-10">
            <Icon
              :name="skill.icon"
              :class="[
                'hidden sm:block text-2xl sm:text-3xl md:text-4xl text-white',
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
                {{ `${skill.years}` }}
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
    </div>
  </div>
</template>

<style scoped></style>
