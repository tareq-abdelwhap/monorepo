<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader />
    <main class="flex-grow container mx-auto px-4 pb-20 pt-4">
      <slot />
    </main>
    <AppNavigation />
  </div>
</template>

<script setup>
// Default layout with navigation
</script>