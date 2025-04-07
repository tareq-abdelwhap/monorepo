<script lang="ts" setup>
const { data, control } = defineProps<{
  headers: string[];
  data: any[];
  control?: {
    search?: boolean;
    filter?: boolean;
    sort?: boolean;
    pagination?: boolean;
  };
}>();

const filter = ref<{ search?: string; filter?: string; sort?: string }>({});
const search = (query: string) => (filter.value.search = query);
const sort = (column: string) => (filter.value.sort = column);

const filteredData = ref();
watch(
  filter,
  () => {
    if (Object.values(filter.value).every(i => !i)) {
      return (filteredData.value = data);
    }

    if (filter.value.search) {
      filteredData.value = data.filter(
        item =>
          !!Object.values(item).filter(v =>
            String(v).toLowerCase().includes(filter.value.search!)
          ).length
      );
    }

    if (filter.value.sort) {
      filteredData.value = (filteredData.value || data).toSorted(
        (a: any, b: any) => {
          if (a[filter.value.sort!] > b[filter.value.sort!]) return 1;
          if (a[filter.value.sort!] < b[filter.value.sort!]) return -1;
          return 0;
        }
      );
    }
  },
  { deep: true }
);

const currentEntry = ref(10);
const entry = (entry: number) => console.log(`Entry => ${entry}`);

const currentPage = ref(1);
const pages = computed(() =>
  Math.ceil((filteredData.value || data).length / currentEntry.value)
);
const page = (page: number) => console.log(`Page => ${page}`);

const pagedData = computed(() => {
  const dataDisplayed = filteredData.value || data;
  if (!control?.pagination) return dataDisplayed;
  return dataDisplayed.slice(
    (currentPage.value - 1) * currentEntry.value,
    currentEntry.value * currentPage.value
  );
});
</script>

<template>
  <div class="flex flex-col gap-6">
    <!-- Control -->
    <MoleculeTableControl
      :search="control?.search"
      :filter="control?.filter"
      :sort="control?.sort"
      :sortColumns="headers"
      @search="search"
      @sort="sort"
      class="z-10"
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :visible="{ opacity: 1, y: 0, transition: { duration: 500, delay: 200 } }"
    />

    <!-- Table -->
    <MoleculeTable
      :headers="headers"
      :data="pagedData"
      v-motion
      :initial="{ opacity: 0 }"
      :visible="{ opacity: 1, transition: { duration: 700 } }"
    />

    <!-- Pagination -->
    <MoleculeTablePagination
      v-if="control?.pagination"
      :pages="pages"
      v-model:current-page="currentPage"
      v-model:current-entry="currentEntry"
      @page="page"
      @entry="entry"
      class="z-10"
      v-motion
      :initial="{ opacity: 0, y: -20 }"
      :visible="{ opacity: 1, y: 0, transition: { duration: 500, delay: 200 } }"
    />
  </div>
</template>

<style scoped></style>
