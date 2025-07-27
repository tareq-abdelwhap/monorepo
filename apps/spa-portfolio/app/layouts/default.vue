<script lang="ts" setup></script>

<template>
  <div class="flex flex-col">
    <div class="flex flex-col min-h-dvh">
      <!-- Fixed header -->
      <organism-header />

      <!-- Content for the rest of the screen -->
      <main class="relative flex-1 flex flex-col">
        <organism-floating-menu />
        <slot />
      </main>
    </div>

    <!-- footer after the main content -->
    <organism-footer />
  </div>
</template>

<style scoped></style>
