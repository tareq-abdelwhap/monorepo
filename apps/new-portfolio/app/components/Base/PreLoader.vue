<script lang="ts" setup>
const preLoader = useTemplateRef('pre-loader');
const progress = ref(0);
let animationFrame: number | null = null;
let startTime: number;

// Start progress animation immediately when setup runs (SSR-compatible)
const duration = 800; // total time to go from 0 to 100

const animateProgress = (target: number) => {
  startTime = performance.now();
  const startValue = progress.value;
  const delta = target - startValue;

  const tick = (now: number) => {
    const elapsed = now - startTime;
    const next = startValue + (elapsed / duration) * delta;
    progress.value = Math.min(Math.round(next), target);

    if (progress.value < target) {
      animationFrame = requestAnimationFrame(tick);
    } else if (target === 100) {
      // Fade out once 100 is reached
      preLoader.value?.classList.add('!opacity-0');
      setTimeout(() => {
        preLoader.value?.classList.add('!hidden');
      }, duration);
    }
  };

  animationFrame = requestAnimationFrame(tick);
};

// Start at 0% as soon as component is initialized
onBeforeMount(() => [(progress.value = 0), animateProgress(75)]);

// Complete to 100% when mounted
onMounted(() =>
  setTimeout(() => {
    if (animationFrame) cancelAnimationFrame(animationFrame);
    animateProgress(100);
  }, duration)
);
</script>

<template>
  <div
    ref="pre-loader"
    :class="[
      'absolute inset-0 flex flex-col items-center justify-center bg-black z-[100] opacity-100 transition-opacity duration-500',
    ]"
  >
    <!-- Percentage Counter -->
    <div class="text-white text-sm mb-2 tracking-wide">
      {{ progress }} / 100
    </div>

    <!-- Progress Bar -->
    <div class="w-[80%] h-2 bg-white/10 rounded overflow-hidden">
      <div
        class="h-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-all"
        :style="{ width: `${progress}%` }"
      ></div>
    </div>
  </div>
</template>

<style scoped></style>
