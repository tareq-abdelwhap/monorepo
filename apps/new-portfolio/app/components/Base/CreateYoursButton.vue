<script lang="ts" setup>
const createYours = () => {
  navigateTo('/');
};
</script>

<template>
  <u-button
    :class="[
      'absolute top-4 end-4 z-[80]',
      'px-4 py-2 bg-white hover:bg-gray-200 text-black rounded-md',
      'hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer',
      'text-sm font-semibold',
    ]"
    @click="createYours"
  >
    Create/Edit yours
  </u-button>
</template>

<style scoped></style>
