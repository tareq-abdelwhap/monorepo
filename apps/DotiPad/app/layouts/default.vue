<script lang="ts" setup></script>

<template>
  <div
    ref="doti-pad"
    class="doti-pad h-screen flex bg-neutral-gray-24 text-white"
  >
    <LayoutAside />

    <main class="relative w-full flex flex-col overflow-y-auto">
      <LayoutHeader />

      <div class="grow pb-28">
        <slot />
      </div>

      <LayoutFooter />
    </main>
  </div>
</template>

<style scoped></style>
