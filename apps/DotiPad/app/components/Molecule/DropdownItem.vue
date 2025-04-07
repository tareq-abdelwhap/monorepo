<script lang="ts" setup>
defineProps<{
  label: string | number;
  selected?: boolean;
  multiple?: boolean;
}>();

const emit = defineEmits<{
  (e: 'select'): void;
}>();
</script>

<template>
  <li
    :class="[
      'px-2 py-1 m-px rounded-lg bg-neutral-gray-18 hover:gradient-outline-3',
      !multiple && selected && 'gradient-outline-3',
      'flex justify-between items-center gap-2',
      'cursor-pointer',
      'text-nowrap',
    ]"
    @click="() => emit('select')"
  >
    <AtomText :text="label" />
    <AtomIcon
      v-if="!multiple && selected"
      name="icon-[material-symbols--check-rounded]"
    />
    <AtomCheckbox v-if="multiple" :checked="selected" />
  </li>
</template>

<style scoped></style>
