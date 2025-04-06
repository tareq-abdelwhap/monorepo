<script lang="ts" setup>
const menusStore = useMenuStore();
const { getMenuList, activeTabItems } = storeToRefs(menusStore);

const { localeProperties } = useI18n();
const isRTL = computed(() => localeProperties.value.dir === 'rtl');
</script>

<template>
  <nav
    :class="[
      'flex flex-col gap-10',
      'border-e-2 border-e-neutral-gray-22',
      'w-72 px-6 pt-32',
    ]"
  >
    <h5
      class="text-nun-h5 font-bold"
      :key="getMenuList?.menu?.menu"
      v-motion
      :initial="{ opacity: 0, y: -20 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 300 } }"
    >
      {{ $t(`menu.${getMenuList?.menu?.menu}.title`) }}
    </h5>

    <template v-if="getMenuList.list.every(item => item.svg)">
      <LayoutAsideNavList :list="getMenuList.list" />
    </template>

    <div v-else class="flex flex-col gap-6">
      <BaseTabs
        :tabs="getMenuList.list.map(item => item.name)"
        @tab-change="menusStore.getTabItems"
        v-motion
        :initial="{ opacity: 0, x: isRTL ? 20 : -20 }"
        :enter="{ opacity: 1, x: 0, transition: { duration: 300 } }"
        class="!h-12"
      />

      <LayoutAsideNavList v-if="activeTabItems" :list="activeTabItems" />
    </div>
  </nav>
</template>

<style scoped></style>
