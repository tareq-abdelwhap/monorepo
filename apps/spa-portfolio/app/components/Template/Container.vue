<script lang="ts" setup>
/**
 * Why Container is fit to be a Template ?
 *  - It's just a wrapper
 *  - It Provides layout structure
 *  - Constraining width, but doesn't inclue any content or business logic
 */

const { as: is = 'div' } = defineProps<{ as?: keyof HTMLElementTagNameMap }>();
</script>

<template>
  <component :is class="w-full">
    <div class="mx-auto w-[calc(100%-16rem)]">
      <slot />
    </div>
  </component>
</template>

<style scoped></style>
