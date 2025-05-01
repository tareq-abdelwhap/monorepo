<script lang="ts" setup>
const { x, y } = useMouse();
</script>

<template>
  <div>
    <div
      :class="[
        'hidden sm:block absolute bg-slate-600/20 rounded-full z-50',
        '-translate-x-1/2 -translate-y-1/2 pointer-events-none blur-3xl',
      ]"
      :style="{
        left: `${x}px`,
        top: `${y}px`,
        width: `200px`,
        height: `200px`,
      }"
    />

    <div class="hidden sm:block absolute inset-0 z-0">
      <div
        class="absolute top-0 -left-4 w-72 h-72 bg-orange-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"
      ></div>
      <div
        class="absolute top-44 -right-4 w-72 h-72 bg-green-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"
      ></div>
      <div
        class="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"
      ></div>
    </div>
  </div>
</template>

<style scoped></style>
