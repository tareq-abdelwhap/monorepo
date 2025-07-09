<script lang="ts" setup>
defineProps<{ title?: string }>();
</script>

<template>
  <!-- 'border border-gray-200 rounded-lg', -->
  <div :class="['py-2 px-4', 'flex flex-col gap-2']">
    <!-- Card Title -->
    <div v-if="title" class="flex items-center justify-between">
      <span :class="['font-bold !m-0 text-sm']" v-text="title" />
    </div>

    <!-- Card Content -->
    <div class="flex flex-col">
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
