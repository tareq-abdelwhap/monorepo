<script lang="ts" setup>
import { useFocus } from '@vueuse/core';

defineProps<{ placeholder: string; name: string; icon?: string }>();

const value = defineModel<string>({ default: '' });

const id = useId();

const input = useTemplateRef<HTMLInputElement>('input');
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
      <AtomIcon v-if="icon" :name="icon" class="-mt-4" />

      <AtomInput
        type="text"
        :name="name"
        :id="id"
        ref="input"
        class="bg-transparent w-full focus:outline-none"
        v-model="value"
      />
    </div>

    <AtomLabel
      :for="id"
      :text="placeholder"
      :class="[
        'absolute text-neutral-gray-12',
        !icon && 'start-4',
        icon && 'start-12',
        'transition-all duration-100 ease-in-out',
        focused || value.length
          ? 'text-nun-sx top-1'
          : 'top-1/2 -translate-y-1/2',
      ]"
    />
  </div>
</template>

<style scoped></style>
