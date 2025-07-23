<script lang="ts" setup>
const { data } = defineProps<{
  data: MySkills[];
}>();

const portfolioStore = usePortfolioStore();
const { experiences } = storeToRefs(portfolioStore);

const getSkillEXP = (skill: MySkills) => {
  const currentYear = new Date().getFullYear();

  const exp =
    (experiences.value
      .filter(exp => exp.skills?.includes(skill.id))
      .reduce(
        (acc, curr) => (acc += (!curr.to ? currentYear : curr.to) - curr.from),
        0
      ) || 1) - 1;

  return `+${exp || skill.duration} ${skill.new ? 'months' : 'years'}`;
};
</script>

<template>
  <div
    class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-5 md:gap-6 w-full"
  >
    <div
      v-for="(skill, index) in data"
      :key="skill.name"
      :class="[
        'relative rounded-xl bg-transparent content-center border',
        'px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3',
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
        <icon
          v-if="skill.icon"
          :name="skill.icon"
          :class="[
            'text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white',
            'absolute -top-4 sm:-top-6 md:-top-8 lg:-top-10',
            'overflow-hidden',
          ]"
        />
        <div class="flex justify-between content-center my-2">
          <h3
            class="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white"
            v-text="skill.name"
          />

          <p
            class="self-center text-[10px] sm:text-xs md:text-sm"
            v-text="getSkillEXP(skill)"
          />
        </div>
        <span
          v-if="skill.new"
          :class="[
            'absolute right-0 bg-green-900 rounded-full text-[10px] sm:text-xs sm:font-semibold',
            'px-2 py-0.5 sm:px-3 sm:py-1',
            '-top-3 sm:-top-5 md:-top-6',
          ]"
        >
          Learning...
        </span>
      </div>
    </div>
  </div>
  <!-- <pre>{{ experiences }}</pre> -->
</template>

<style scoped></style>
