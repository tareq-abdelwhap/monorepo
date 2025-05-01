<template>
  <header class="bg-primary-700 text-white shadow-md">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <h1 class="text-xl font-bold">
        <NuxtLink to="/" class="flex items-center gap-2">
          <span class="text-2xl">💰</span>
          FinTracker
        </NuxtLink>
      </h1>
      <div class="flex items-center gap-3">
        <button @click="toggleColorMode" class="p-2 rounded-full hover:bg-primary-800 transition-colors">
          <span v-if="colorMode.preference === 'dark'" class="text-yellow-200">☀️</span>
          <span v-else class="text-white">🌙</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
const colorMode = useColorMode();

const toggleColorMode = () => {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark';
};
</script>