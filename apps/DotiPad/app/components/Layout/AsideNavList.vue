import { SwitchLocalePathLink } from '../../../.nuxt/components';
<script lang="ts" setup>
const { list } = defineProps<{
  list: MenuItemsType<string>[];
}>();

const { localeProperties } = useI18n();
const isRTL = computed(() => localeProperties.value.dir === 'rtl');

// const menuListRef = useTemplateRef('menuList');
// const SVGHover = ref();

// onMounted(() => {
//   menuListRef.value?.forEach((item: any) => {
//     item.addEventListener('mouseenter', () => {
//       const SVGName = item.querySelector('svg').getAttribute('name');
//       if (list.findIndex(i => i.svg === SVGName) === activeMenuList) return;
//       SVGHover.value = list.findIndex(i => i.svg === SVGName);
//     });
//     item.addEventListener('mouseleave', () => {
//       const SVGName = item.querySelector('svg').getAttribute('name');
//       if (list.findIndex(i => i.svg === SVGName) === activeMenuList) return;
//       if (SVGHover.value === list.findIndex(i => i.svg === SVGName)) {
//         SVGHover.value = '';
//       }
//     });
//   });
// });

const localPath = useLocalePath();
</script>

<template>
  <ul class="flex flex-col gap-4">
    <li
      v-for="({ name, svg, route }, idx) in list"
      :key="`${name}-${idx}`"
      ref="menuList"
      v-motion
      :initial="{ opacity: 0, x: isRTL ? 20 : -20 }"
      :enter="{
        opacity: 1,
        x: 0,
        transition: { duration: 300, delay: idx * 50 },
      }"
    >
      <NuxtLinkLocale
        :to="route"
        :class="[
          'py-2 cursor-pointer flex gap-2 items-center font-bold text-nun-sm',
          'transition-all duration-300 ease-in-out',
          'text-neutral-gray-8',
        ]"
        active-class="!text-white"
      >
        <SVG
          :name="svg!"
          class="w-5 h-5"
          :active="localPath({ path: route }) === $route.fullPath"
        />
        {{ name }}
      </NuxtLinkLocale>
    </li>
  </ul>
</template>

<style scoped></style>
