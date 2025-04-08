<script lang="ts" setup></script>

<template>
  <div class="doti-pad h-screen flex bg-neutral-gray-24 text-white">
    <OrganismAside />

    <main class="relative w-full flex flex-col overflow-y-auto">
      <OrganismHeader />

      <div class="grow pb-28">
        <slot />
      </div>

      <OrganismFooter />
    </main>
  </div>
</template>

<style scoped></style>
