<template>
  <div class="card">
    <h3 class="text-lg font-semibold mb-4">{{ title }}</h3>

    <div class="relative h-64 md:h-80">
      <client-only>
        <component
          :is="chartComponent"
          :chart-data="chartData"
          :chart-options="chartOptions"
        />
      </client-only>
    </div>
  </div>
</template>

<script setup>
import { h, defineAsyncComponent, computed } from 'vue';
import { useColorMode } from '#imports';

const props = defineProps({
  title: {
    type: String,
    default: 'Chart',
  },
  type: {
    type: String,
    default: 'bar',
    validator: value => ['bar', 'line', 'pie', 'doughnut'].includes(value),
  },
  data: {
    type: Object,
    required: true,
  },
  options: {
    type: Object,
    default: () => ({}),
  },
});

// Use color mode
const colorMode = useColorMode();

// Dynamically import chart components based on type
const chartComponent = defineAsyncComponent(() =>
  import('vue-chartjs').then(module => {
    const components = {
      bar: module.Bar,
      line: module.Line,
      pie: module.Pie,
      doughnut: module.Doughnut,
    };
    return components[props.type];
  })
);

// Set chart colors based on theme
const chartColors = computed(() => {
  const isDark = colorMode.value === 'dark';

  return {
    textColor: isDark ? '#e2e8f0' : '#374151',
    gridColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
    backgroundColor: isDark ? '#1e293b' : '#ffffff',
  };
});

// Merge user options with default options
const chartOptions = computed(() => {
  const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: chartColors.value.textColor,
        },
      },
    },
    scales:
      props.type === 'pie' || props.type === 'doughnut'
        ? undefined
        : {
            x: {
              grid: {
                color: chartColors.value.gridColor,
              },
              ticks: {
                color: chartColors.value.textColor,
              },
            },
            y: {
              grid: {
                color: chartColors.value.gridColor,
              },
              ticks: {
                color: chartColors.value.textColor,
              },
            },
          },
  };

  return { ...defaultOptions, ...props.options };
});

// Chart data object
const chartData = computed(() => props.data);
</script>
