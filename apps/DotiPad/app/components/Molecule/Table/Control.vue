<script lang="ts" setup>
defineProps<{
  sortColumns: string[];

  search?: boolean;
  filter?: boolean;
  sort?: boolean;
}>();

const emit = defineEmits<{
  (e: 'search', searchQuery: string): void;
  (e: 'sort', column: string): void;
}>();

const searchQuery = defineModel<string>({ default: '' });

watch(
  () => searchQuery.value,
  () => debounce(() => emit('search', searchQuery.value.toLowerCase()), 300)
);

const sort = (column: string) => emit('sort', column);
</script>

<template>
  <div
    v-if="[search, filter, sort].some(Boolean)"
    class="flex items-center gap-6"
  >
    <MoleculeInputText
      v-if="search"
      v-model="searchQuery"
      name="search"
      :placeholder="$t('table.search')"
      icon="icon-[material-symbols--search-rounded]"
    />

    <div v-if="[filter, sort].some(Boolean)" class="flex items-center gap-3">
      <MoleculeDropdown
        v-if="filter"
        :items="['Filter 01', 'Filter 02']"
        :placeholder="$t('table.filter')"
        clear-value
        multiple
      />
      <MoleculeDropdown
        v-if="sort"
        :items="sortColumns"
        :placeholder="$t('table.sort')"
        @change="sort"
        clear-value
      />
    </div>
  </div>
</template>

<style scoped></style>
