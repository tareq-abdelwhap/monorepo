<script lang="ts" setup></script>

<template>
  <div
    class="absolute top-1/2 -translate-y-1/2 end-0 z-10 text-center px-5 w-16 flex flex-col items-center justify-end"
  >
    <a
      href="#"
      :class="[
        'cursor-pointer text-lg mb-6',
        'hover:text-slate-300',
        'transition-[color transform] duration-200 ease-in-out',
        'text-slate-600',
      ]"
    >
      <Icon name="entypo-social:linkedin-with-circle" class="w-10 h-10" />
    </a>
    <a
      href="#"
      :class="[
        'cursor-pointer text-lg mb-6',
        'hover:text-slate-300',
        'transition-[color transform] duration-200 ease-in-out',
        'text-slate-600',
      ]"
    >
      <Icon name="bytesize:github" class="w-10 h-10" />
    </a>
  </div>
</template>

<style scoped></style>
