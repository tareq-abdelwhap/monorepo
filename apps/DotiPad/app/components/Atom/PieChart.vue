<script lang="ts" setup>
defineProps<{ percentage: number }>();
</script>

<template>
  <div
    class="relative size-full rounded-full"
    :style="`background: conic-gradient(#1ebea5 ${percentage}%, #333333 ${percentage}%);`"
  />
</template>

<style scoped></style>
