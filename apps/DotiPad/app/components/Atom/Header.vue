<script lang="ts" setup>
const { level } = defineProps<{ level: number }>();

const tag = computed(() => {
  switch (level) {
    case 1:
      return 'h1';
    case 2:
      return 'h2';
    case 3:
      return 'h3';
    case 4:
      return 'h4';
    case 5:
      return 'h5';
    case 6:
      return 'h6';
    default:
      return 'h1';
  }
});
</script>

<template>
  <component :is="tag">
    <slot />
  </component>
</template>

<style scoped></style>
