<script lang="ts" setup>
const { header = 'Page Header' } = defineProps<{ header?: string }>();
</script>

<template>
  <div class="pt-16 container flex flex-col gap-12">
    <div
      v-motion
      :initial="{ opacity: 0, y: -20 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 300 } }"
    >
      <slot name="header">
        <h4 class="text-nun-h4">{{ header }}</h4>
      </slot>
    </div>

    <slot />
  </div>
</template>

<style scoped></style>
