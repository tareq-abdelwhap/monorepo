<script lang="ts" setup>
/**
 * Why Header is fit to be an Organism ?
 *  - It Groups multiple elements (layout container + branding) into a meaningful and reusable UI section
 */
</script>

<template>
  <template-container
    as="header"
    class="sticky top-0 w-full py-16 z-50 bg-bg-1"
  >
    <div class="flex gap-2 text-logo-m font-ibm">
      <span class="text-brand-1" v-text="`<C/>`" />
      <span class="text-white" v-text="`Tareq Abdelwhap`" />
    </div>
  </template-container>
</template>

<style scoped></style>
