<script lang="ts" setup></script>

<template>
  <div ref="container" class="relative h-screen w-full overflow-hidden">
    <BasePreLoader />

    <BaseCreateYoursButton />

    <slot />

    <span
      class="absolute bottom-0 end-0 z-[150] text-white sm:text-sm px-8 py-4"
    >
      made with 🤍 by
      <a
        class="font-bold underline hover:text-blue-500 text-blue-300"
        href="https://www.linkedin.com/in/tareq-abdelwhap/"
        target="_blank"
        v-text="`Tareq Abdelwhap`"
      />
    </span>
  </div>
</template>

<style scoped></style>
