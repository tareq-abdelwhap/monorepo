<script lang="ts" setup>
defineProps<{ text: string }>();
</script>

<template>
  <label v-text="text" />
</template>

<style scoped></style>
