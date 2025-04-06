<script lang="ts" setup>
const { activeIndex = 0 } = defineProps<{
  tabs: string[];
  activeIndex?: number;
}>();

const emit = defineEmits<{
  tabChange: [idx: number];
}>();

const activeTab = ref(0);

const tabRef = useTemplateRef('tab');
const activeTabRef = ref(tabRef.value?.[0]?.btnRef);

const style = ref({
  width: '0px',
  left: '0px',
});

const changeIndex = (idx: number) => {
  emit('tabChange', idx);

  activeTab.value = idx;

  activeTabRef.value = tabRef.value?.[idx]?.btnRef;

  style.value = {
    width: `${activeTabRef.value?.offsetWidth}px`,
    left: `${activeTabRef.value?.offsetLeft}px`,
  };
};

onMounted(() => changeIndex(activeIndex));
</script>

<template>
  <div class="relative flex p-1.5 bg-neutral-gray-23 w-full rounded-xl">
    <BaseButton
      v-for="(tab, idx) in tabs"
      ref="tab"
      :data-tab-index="idx"
      :key="tab"
      :label="tab"
      class="!bg-transparent z-10 flex-grow text-nun-sx"
      @click="() => changeIndex(idx)"
    />

    <div
      class="absolute inset-y-1.5 bg-gradient-3 rounded-lg z-0 transition-all duration-150 ease-in-out"
      :style="style"
    />
  </div>
</template>

<style scoped></style>
