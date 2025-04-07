<script lang="ts" setup>
defineProps<{ text: string | number }>();
</script>

<template>
  <span v-text="text" />
</template>

<style scoped></style>
