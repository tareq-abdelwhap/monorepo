<template>
  <div class="min-h-screen flex flex-col">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
// Initialize the app and load data from storage
import { useAppSetup } from '~/composables/useAppSetup';

useAppSetup();
</script>