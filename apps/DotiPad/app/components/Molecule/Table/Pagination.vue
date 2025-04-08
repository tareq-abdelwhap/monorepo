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
      <AtomText class="text-nun-sx" :text="$t('table.show')" />
      <MoleculeDropdown :items="entries" v-model="currentEntry" />
      <AtomText class="text-nun-sx" :text="$t('table.entries')" />
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
        <AtomIcon
          name="icon-[material-symbols--keyboard-arrow-left] rtl:icon-[material-symbols--keyboard-arrow-right]"
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
        <AtomText class="w-6 h-6 text-center" :text="i" />
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
        <AtomIcon
          name="icon-[material-symbols--keyboard-arrow-right] rtl:icon-[material-symbols--keyboard-arrow-left]"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
