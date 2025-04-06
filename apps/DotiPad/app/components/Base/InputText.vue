<script lang="ts" setup>
import { useFocus } from '@vueuse/core';

defineProps<{ placeholder: string; name: string; icon: string }>();

const value = defineModel<string>({ default: '' });

const id = useId();

const input = useTemplateRef('input');
const { focused } = useFocus(input);
</script>

<template>
  <div class="relative flex flex-col gap-2 w-full">
    <div
      :class="[
        'flex items-center gap-2',
        'border border-neutral-gray-22 rounded-2xl px-4 pb-2 pt-6 w-full',
      ]"
    >
      <span v-if="icon" :class="[icon, 'w-6 h-6 -mt-4']" />
      <input
        type="text"
        :name="name"
        :id="id"
        ref="input"
        class="bg-transparent w-full focus:outline-none"
        v-model="value"
      />
    </div>

    <label
      :for="id"
      :class="[
        'absolute text-neutral-gray-12',
        !icon && 'start-4',
        icon && 'start-12',
        'transition-all duration-100 ease-in-out',
        focused || value.length
          ? 'text-nun-sx top-1'
          : 'top-1/2 -translate-y-1/2',
      ]"
    >
      {{ placeholder }}
    </label>
  </div>
</template>

<style scoped></style>
