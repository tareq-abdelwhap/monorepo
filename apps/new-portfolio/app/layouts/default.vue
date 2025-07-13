<script lang="ts" setup></script>

<template>
  <div ref="container" class="relative h-screen w-full overflow-hidden">
    <BasePreLoader />

    <BaseLoginButton />

    <slot />
  </div>
</template>

<style scoped></style>
