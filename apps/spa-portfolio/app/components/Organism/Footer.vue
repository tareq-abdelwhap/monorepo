<script lang="ts" setup>
/**
 * Why Footer is fit to be an Organism ?
 *  - It Groups multiple elements (layout container + span + anchor) into a meaningful and reusable UI section
 */
</script>

<template>
  <template-container as="footer" class="bg-gray py-6">
    <div class="flex items-center justify-end">
      <span>
        Made with ❤️ by
        <a
          class="font-bold underline hover:text-blue-500 text-blue-300"
          href="https://www.linkedin.com/in/tareq-abdelwhap/"
          target="_blank"
          v-text="`Tareq Abdelwhap`"
        />
      </span>
    </div>
  </template-container>
</template>

<style scoped></style>
