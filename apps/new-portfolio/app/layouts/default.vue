<script lang="ts" setup></script>

<template>
  <div class="relative h-screen w-full overflow-hidden">
    <BasePreLoader />

    <BaseCreateYoursButton />

    <slot />

    <BaseFooter />
  </div>
</template>

<style scoped></style>
