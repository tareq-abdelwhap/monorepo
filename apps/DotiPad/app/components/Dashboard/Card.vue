<script lang="ts" setup></script>

<template>
  <div
    :class="[
      'bg-neutral-gray-23 rounded-2xl w-full p-4 pb-6',
      'flex flex-col gap-4',
    ]"
  >
    <slot name="header"></slot>

    <div class="grow">
      <slot />
    </div>

    <slot name="footer"></slot>
  </div>
</template>

<style scoped></style>
