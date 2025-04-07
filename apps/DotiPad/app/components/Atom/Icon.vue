<script lang="ts" setup>
defineProps<{ name: string }>();
</script>

<template>
  <span :class="[name, 'w-6 h-6']" />
</template>

<style scoped></style>
