<script lang="ts" setup>
const { pages } = defineProps<{
  pages: number;
}>();

const emit = defineEmits<{
  entry: [entry: number];
  page: [page: number];
}>();

const currentEntry = defineModel<number>('currentEntry', { default: 10 });
const entries = ref([10, 20, 30, 40, 50]);

watch(
  () => currentEntry.value,
  () => emit('entry', currentEntry.value)
);

const currentPage = defineModel<number>('currentPage', { default: 1 });

const prev = () => {
  const prevPage = currentPage.value - 1;
  if (prevPage < 1) return;
  currentPage.value = prevPage;
};
const next = () => {
  const nextPage = currentPage.value + 1;
  if (nextPage > pages) return;
  currentPage.value = nextPage;
};

watch(
  () => currentPage.value,
  () => emit('page', currentPage.value)
);
</script>

<template>
  <div class="flex items-center justify-between">
    <!-- Pagination Entries -->
    <div class="flex items-center gap-2">
      <span class="text-nun-sx" v-text="$t('table.show')" />
      <BaseDropdown :items="entries" v-model="currentEntry" />
      <span class="text-nun-sx" v-text="$t('table.entries')" />
    </div>

    <!-- Pagination Pages -->
    <div class="flex items-center gap-2">
      <div
        :class="[
          'flex items-center justify-center p-2 rounded-lg',
          'outline outline-1 outline-neutral-gray-22',
          'hover:outline-none hover:gradient-outline-3 bg-neutral-gray-24',
          'cursor-pointer',
        ]"
        @click="prev"
      >
        <span
          class="icon-[material-symbols--keyboard-arrow-left] rtl:icon-[material-symbols--keyboard-arrow-right] w-6 h-6"
        />
      </div>

      <div
        v-for="i in pages"
        :class="[
          'flex items-center justify-center p-2 rounded-lg',
          'outline outline-1 outline-neutral-gray-22',
          'hover:outline-none hover:gradient-outline-3 bg-neutral-gray-24',
          'cursor-pointer',
          currentPage === +i && 'outline-none gradient-outline-3',
        ]"
        @click="() => (currentPage = i)"
      >
        <span class="w-6 h-6 text-center" v-text="i" />
      </div>

      <div
        :class="[
          'flex items-center justify-center p-2 rounded-lg',
          'outline outline-1 outline-neutral-gray-22',
          'hover:outline-none hover:gradient-outline-3 bg-neutral-gray-24',
          'cursor-pointer',
        ]"
        @click="next"
      >
        <span
          class="icon-[material-symbols--keyboard-arrow-right] rtl:icon-[material-symbols--keyboard-arrow-left] w-6 h-6"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
