<script lang="ts" setup>
const financeStore = useFinanceStore();
const { summery } = storeToRefs(financeStore);

const selectedMonth = ref<Date | null>(null);

// Get previous month in YYYY-MM format
const now = new Date();
now.setMonth(now.getMonth() - 1);
const maxPrevMonth = `${now.getFullYear()}-${String(
  now.getMonth() + 1
).padStart(2, '0')}`;

const lastDay = computed(() => {
  if (!selectedMonth.value) return new Date();
  const [year, month] = new Date(selectedMonth.value)
    .toISOString()
    .split('-')
    .map(Number);

  // Get last day of the month
  return new Date(year!, month!, 0); // day 0 of next month = last day of selected month
});

watch(
  () => selectedMonth.value,
  () => {
    if (selectedMonth.value) {
      financeStore.fetchSummery(lastDay.value);
    }
  },
  { deep: true }
);

function formatDateLocal(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 0-based month
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

const settelmentAmount = computed(() => {
  return Number(formatCurrency(summery.value.remaining).replace(/,/g, ''));
});
const settle = () => {
  if (selectedMonth.value && summery.value.remaining < 0) {
    financeStore.settle({
      title: 'Settle',
      amount_egp: Math.abs(settelmentAmount.value),
      take_from:
        settelmentAmount.value > 0
          ? formatDateLocal(lastDay.value)
          : formatDateLocal(new Date()),
      add_to:
        settelmentAmount.value < 0
          ? formatDateLocal(lastDay.value)
          : formatDateLocal(new Date()),
      notes: '',
    });
  }
};

onUnmounted(() => {
  selectedMonth.value = null;
  financeStore.fetchSummery();
});
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-5 py-5 px-8">
    <div class="flex items-center gap-2">
      Month:
      <input
        v-model="selectedMonth"
        type="month"
        class="border border-gray-200 rounded-md py-1 px-2"
        :max="maxPrevMonth"
      />
    </div>

    <!-- Settelment Button -->
    <ion-button
      expand="block"
      :disabled="!selectedMonth || Number(settelmentAmount) === 0"
      @click="settle"
    >
      Settle
    </ion-button>
  </div>
</template>

<style scoped></style>
