<script lang="ts" setup>
const route = useRoute();

const menusStore = useMenuStore();
const { menus, getMenuList } = storeToRefs(menusStore);

const TopStyle = ref({ top: '0px' });
const menuRef = useTemplateRef('menu');

const setActiveBG = () => {
  TopStyle.value.top = `${(52 + 24) * getMenuList.value.menuIndex}px`;
};

setActiveBG();

const changeMenu = (menu?: any) => {
  menusStore.setActiveMenu(menu);
  setActiveBG();
};

const SVGHover = ref();
onMounted(() => {
  menuRef.value?.forEach((item: any) => {
    item.addEventListener('mouseenter', () => {
      if (item.dataset.menu === getMenuList.value.menu) return;
      SVGHover.value = item.dataset.menu;
    });

    item.addEventListener('mouseleave', () => {
      if (item.dataset.menu === getMenuList.value.menu) return;
      if (SVGHover.value === item.dataset.menu) SVGHover.value = '';
    });
  });
});

const { localeProperties } = useI18n();
const isRTL = computed(() => localeProperties.value.dir === 'rtl');
</script>

<template>
  <div class="flex flex-col gap-6 relative">
    <div
      v-for="({ menu, svg }, idx) in menus"
      :key="svg"
      ref="menu"
      :data-menu="menu"
      :class="[
        'cursor-pointer',
        'p-3 rounded-2xl',
        'flex items-center justify-center',
        'z-10',
      ]"
      @click="() => changeMenu(menu)"
      v-motion
      :initial="{ opacity: 0, x: isRTL ? 20 : -20 }"
      :enter="{
        opacity: 1,
        x: 0,
        transition: { duration: 300, delay: idx * 50 },
      }"
    >
      <AtomSVG
        :name="svg"
        class="w-7 h-7"
        :active="[...route.fullPath.split('/'), SVGHover].includes(menu)"
      />
    </div>

    <!-- Animated Active Background -->
    <div
      :class="[
        'w-full h-[52px] bg-neutral-gray-23 rounded-xl z-0',
        'absolute start-0',
        'transition-all duration-300 ease-in-out',
      ]"
      :style="TopStyle"
    />
  </div>
</template>

<style scoped></style>
