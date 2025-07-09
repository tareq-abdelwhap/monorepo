<script lang="ts" setup>
import { Line } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Tooltip,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  type ChartOptions,
} from 'chart.js';

ChartJS.register(
  Tooltip,
  Filler,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

const financeStore = useFinanceStore();
const { history } = storeToRefs(financeStore);

const data = computed(() => {
  return history.value.allowances?.reduce((acc: any, curr) => {
    const date = formatDate(curr.date, true);
    acc[date] ||= 0;
    acc[date] += curr.amount_egp;
    return acc;
  }, {});
});

const options: ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: true,
  interaction: {
    mode: 'nearest', // ✅ now correctly typed
    axis: 'x',
    intersect: false,
  },
  plugins: {
    tooltip: {
      mode: 'nearest',
      intersect: false,
    },
  },
  scales: {
    y: { display: false },
  },
};

const lineData = computed(() => ({
  labels: Object.keys(data.value).reverse(),
  datasets: [
    {
      data: Object.values(data.value).reverse() as number[],
      fill: true, // Fill area below the line
      backgroundColor: '#3b82f630', // Area color soft Blue
      borderColor: '#3b82f6', // Line color Blue
      tension: 0.4,
    },
  ],
}));

const totalSpending = computed(() => {
  return formatCurrency(
    (Object.values(data.value) as number[]).reduce(
      (acc, curr) => acc + curr,
      0
    ),
    'EGP'
  );
});
</script>

<template>
  <BaseCard>
    <span
      class="text-lg font-semibold ms-5 my-3 text-blue-500"
      v-text="totalSpending"
    />

    <Line :data="lineData" :options="options" />
  </BaseCard>
</template>

<style scoped></style>
