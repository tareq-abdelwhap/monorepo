<script lang="ts" setup></script>

<template>
  <div
    :class="[
      'relative h-screen w-full overflow-hidden',
      'flex justify-center items-center',
      'bg-black text-white',
    ]"
  >
    <slot />

    <BaseFooter />
  </div>
</template>

<style scoped></style>
