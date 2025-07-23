<script lang="ts" setup></script>

<template>
  <div class="relative h-screen w-full overflow-hidden">
    <base-pre-loader />

    <base-create-yours-button />

    <slot />

    <base-footer />
  </div>
</template>

<style scoped></style>
