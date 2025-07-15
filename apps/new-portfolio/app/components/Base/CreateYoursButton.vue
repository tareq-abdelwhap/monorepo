<script lang="ts" setup>
const createYours = () => {
  navigateTo('/');
};
</script>

<template>
  <button
    :class="[
      'absolute top-4 end-4 z-[80]',
      'px-4 py-2 bg-white text-black rounded-md',
      'hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer',
      'text-sm font-semibold',
    ]"
    @click="createYours"
  >
    Create yours
  </button>
</template>

<style scoped></style>
