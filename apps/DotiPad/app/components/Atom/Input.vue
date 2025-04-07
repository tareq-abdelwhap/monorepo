<script lang="ts" setup>
const modelValue = defineModel<string>({ default: '' });
</script>

<template>
  <input v-model="modelValue" />
</template>

<style scoped></style>
