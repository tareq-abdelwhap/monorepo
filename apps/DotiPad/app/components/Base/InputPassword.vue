<script lang="ts" setup>
import { useFocus } from '@vueuse/core';

defineProps<{ placeholder: string; name: string }>();

const value = defineModel<string>({ default: '' });

const id = useId();

const input = useTemplateRef('input');
const { focused } = useFocus(input);

const showPassword = ref(false);
const togglePassword = () => (showPassword.value = !showPassword.value);
</script>

<template>
  <div class="relative flex flex-col gap-2 w-full">
    <input
      :type="showPassword ? 'text' : 'password'"
      :name="name"
      :id="id"
      ref="input"
      class="bg-transparent border border-neutral-gray-22 rounded-2xl px-4 pb-2 pt-6 w-full focus:outline-none"
      v-model="value"
      autocomplete="new-password"
    />

    <div
      :class="[
        'p-2 flex items-center justify-center cursor-pointer',
        'absolute end-4 top-1/2 -translate-y-1/2',
      ]"
      @click="togglePassword"
    >
      <div
        :class="[
          'relative w-5 border border-neutral-gray-12 rounded-[100%]',
          !showPassword && 'h-3',
          showPassword && 'h-0',
          'transition-all duration-200 ease-in-out',
          'overflow-hidden',
        ]"
      >
        <div
          class="w-1.5 h-1.5 rounded-full bg-neutral-gray-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </div>

    <label
      :for="id"
      :class="[
        'text-neutral-gray-12',
        'absolute start-4',
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

<style scoped>
/* For Chromium-based browsers (Chrome, Edge) */
input::-ms-reveal,
input::-ms-clear {
  display: none;
}

/* Firefox doesn't add any icon */

/* For WebKit-based auto-fill buttons (Safari, Chrome) */
input::-webkit-credentials-auto-fill-button {
  visibility: hidden;
  display: none !important;
  pointer-events: none;
}

/* Optional: Remove native appearance */
input {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
</style>
