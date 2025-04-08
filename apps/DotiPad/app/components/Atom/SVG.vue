<script lang="ts" setup>
defineProps<{ name: string; active?: boolean }>();

const importComponent = (name: string) =>
  defineAsyncComponent(() => import(`./Icons/${name}.vue`));

const attrs = useAttrs(); // Get all attributes
const svgClass = computed(() =>
  String(attrs.class)
    ?.split(' ')
    ?.filter(cls => cls.includes('fill') || cls.includes('strok'))
    ?.join(' ')
);
</script>

<template>
  <div class="flex items-center justify-center">
    <component :is="importComponent(name)" :class="svgClass" :active="active" />
  </div>
</template>
