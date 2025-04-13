<script lang="ts" setup>
defineProps<{
  label?: string;
}>();

const btnRef = useTemplateRef('btn');

defineExpose({ btnRef });

const attrs = useAttrs();

const isDisabled = computed(() => {
  if (!Object.hasOwn(attrs, 'disabled')) return false;

  const disabledAttr = attrs.disabled;

  if (typeof disabledAttr === 'string') return true;

  return disabledAttr;
});
</script>

<template>
  <button
    ref="btn"
    :class="[
      'cursor-pointer',
      'px-4 py-3 rounded-xl',
      'flex items-center justify-center gap-2',
      'text-nun-sm font-bold',
      !isDisabled && 'bg-neutral-gray-23',
      isDisabled && 'bg-neutral-gray-12',
    ]"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<style scoped></style>
