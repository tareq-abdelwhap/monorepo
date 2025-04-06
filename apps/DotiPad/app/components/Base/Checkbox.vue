<script lang="ts" setup>
defineProps<{
  checked?: boolean;
}>();
</script>

<template>
  <div
    :class="[
      'w-5 h-5 rounded-md border border-neutral-gray-8',
      'flex items-center justify-center',
      checked && 'bg-gradient-3',
    ]"
  >
    <span
      v-if="checked"
      class="icon-[material-symbols--check-rounded] w-4 h-4"
    />
  </div>
</template>

<style scoped></style>
