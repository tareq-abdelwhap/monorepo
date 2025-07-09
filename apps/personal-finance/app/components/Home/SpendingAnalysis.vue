<script lang="ts" setup>
import { Bar } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Tooltip,
  BarElement,
  CategoryScale,
  LinearScale,
  type ChartOptions,
} from 'chart.js';

ChartJS.register(Tooltip, BarElement, CategoryScale, LinearScale);

const financeStore = useFinanceStore();
const { history } = storeToRefs(financeStore);

const data = computed(() => {
  return history.value.expenses?.reduce((acc: any, curr) => {
    const cat = curr.category.toLowerCase();
    acc[cat] ||= 0;
    acc[cat] += curr.amount_egp;
    return acc;
  }, {});
});

const options: ChartOptions<'bar'> = {
  indexAxis: 'y',
  responsive: true,
  maintainAspectRatio: true,
  interaction: {
    mode: 'nearest', // 👈 closest element
    axis: 'y', // 👈 focus on full row (Y-axis)
    intersect: false, // 👈 allow triggering hover without intersecting the bar
  },
  scales: { x: { display: false } },
};

const barData = computed(() => ({
  labels: Object.keys(data.value).reverse(),
  datasets: [
    {
      data: Object.values(data.value).reverse() as number[],
      fill: true, // Fill area below the line
      backgroundColor: '#22c55e30',
      borderColor: '#22c55e60',
      borderWidth: 1,
      borderRadius: 10, // 👈 Rounds the bar corners
      barPercentage: 0.8, // Optional: adjust bar thickness
      categoryPercentage: 0.8, // Optional: spacing between bars
    },
  ],
}));
</script>

<template>
  <BaseCard title="Spending Analysis" class="w-full">
    <Bar :data="barData" :options="options" />
  </BaseCard>
</template>

<style scoped></style>
