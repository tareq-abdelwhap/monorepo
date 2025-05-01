<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Statistics</h1>

    <!-- Filter controls -->
    <div class="card mb-6">
      <h2 class="text-lg font-semibold mb-3">Time Period</h2>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="period in timePeriods"
          :key="period.value"
          @click="setTimePeriod(period.value)"
          class="btn"
          :class="
            currentPeriod === period.value ? 'btn-primary' : 'btn-outline'
          "
        >
          {{ period.label }}
        </button>
      </div>
    </div>

    <!-- Summary metrics -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div
        class="card bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900 dark:to-primary-800"
      >
        <h3
          class="text-lg font-semibold text-primary-900 dark:text-primary-100"
        >
          Total Spent
        </h3>
        <p
          class="text-3xl font-bold text-primary-700 dark:text-primary-300 mt-2"
        >
          {{ formatCurrency(periodStats.totalSpent, 'EGP') }}
        </p>
      </div>

      <div
        class="card bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800"
      >
        <h3 class="text-lg font-semibold text-purple-900 dark:text-purple-100">
          Remaining Budget
        </h3>
        <p class="text-3xl font-bold text-purple-700 dark:text-purple-300 mt-2">
          {{ formatCurrency(periodStats.remaining, 'EGP') }}
        </p>
      </div>

      <div
        class="card bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800"
      >
        <h3 class="text-lg font-semibold text-blue-900 dark:text-blue-100">
          Daily Average
        </h3>
        <p class="text-3xl font-bold text-blue-700 dark:text-blue-300 mt-2">
          {{ formatCurrency(periodStats.dailyAverage, 'EGP') }}
        </p>
      </div>
    </div>

    <!-- Charts -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <!-- Spending by Category -->
      <!-- <ChartOverview
        title="Spending by Category"
        type="doughnut"
        :data="categoryChartData"
      /> -->

      <!-- Spending over time -->
      <!-- <ChartOverview
        title="Daily Spending"
        type="bar"
        :data="dailySpendingChartData"
      /> -->
    </div>

    <!-- Top expenses -->
    <div class="card">
      <h2 class="text-xl font-semibold mb-4">Top Expenses</h2>
      <div v-if="topExpenses.length">
        <div
          v-for="expense in topExpenses"
          :key="expense.id"
          class="flex items-center justify-between p-3 mb-2 bg-gray-50 dark:bg-gray-900 rounded-lg"
        >
          <div class="flex items-center gap-3">
            <div
              class="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-xl"
            >
              {{ getCategoryIcon(expense.category) }}
            </div>
            <div>
              <p class="font-medium">{{ expense.description }}</p>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                {{ formatDate(expense.date) }}
              </p>
            </div>
          </div>
          <div class="text-right">
            <p class="font-semibold text-red-600 dark:text-red-400">
              {{ formatCurrency(expense.amount, 'EGP') }}
            </p>
          </div>
        </div>
      </div>
      <div v-else class="py-6 text-center">
        <p class="text-gray-500 dark:text-gray-400">
          No expenses recorded for this period
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import {
  format,
  startOfDay,
  endOfDay,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  parseISO,
} from 'date-fns';
import { useExpenseStore, EXPENSE_CATEGORIES } from '~/stores/expense';
import { useSettingsStore } from '~/stores/settings';

const expenseStore = useExpenseStore();
const settingsStore = useSettingsStore();

// Time period options
const timePeriods = [
  { label: 'Today', value: 'day' },
  { label: 'This Week', value: 'week' },
  { label: 'This Month', value: 'month' },
];

const currentPeriod = ref('week');

// Set time period
const setTimePeriod = period => {
  currentPeriod.value = period;
};

// Get period date range
const periodRange = computed(() => {
  const now = new Date();

  switch (currentPeriod.value) {
    case 'day':
      return {
        start: startOfDay(now),
        end: endOfDay(now),
        days: 1,
      };
    case 'week':
      return {
        start: startOfWeek(now, { weekStartsOn: 1 }),
        end: endOfWeek(now, { weekStartsOn: 1 }),
        days: 7,
      };
    case 'month':
      return {
        start: startOfMonth(now),
        end: endOfMonth(now),
        days: new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate(),
      };
    default:
      return {
        start: startOfDay(now),
        end: endOfDay(now),
        days: 1,
      };
  }
});

// Get expenses for the current period
const periodExpenses = computed(() => {
  return expenseStore.expensesByPeriod(
    'custom',
    periodRange.value.start,
    periodRange.value.end
  );
});

// Calculate period statistics
const periodStats = computed(() => {
  const totalSpent = periodExpenses.value.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  // Calculate budget based on settings
  let budget = settingsStore.monthlyBudgetGoal;
  if (currentPeriod.value === 'week') {
    budget = (settingsStore.monthlyBudgetGoal / 30) * 7;
  } else if (currentPeriod.value === 'day') {
    budget = settingsStore.monthlyBudgetGoal / 30;
  }

  const remaining = Math.max(0, budget - totalSpent);
  const dailyAverage = totalSpent / periodRange.value.days;

  return {
    totalSpent,
    remaining,
    dailyAverage,
    budget,
  };
});

// Prepare data for category chart
const categoryChartData = computed(() => {
  const categoryTotals = expenseStore.expensesByCategoryAndPeriod(
    'custom',
    periodRange.value.start,
    periodRange.value.end
  );

  const labels = [];
  const data = [];
  const backgroundColors = [
    '#0F766E', // primary-700
    '#6d28d9', // secondary-700
    '#15803d', // success-700
    '#b45309', // warning-700
    '#b91c1c', // error-700
    '#4338ca', // indigo-700
    '#9333ea', // purple-700
    '#7c2d12', // amber-700
    '#374151', // gray-700
  ];

  // Sort categories by amount and get top categories
  const sortedCategories = Object.entries(categoryTotals)
    .filter(([_, amount]) => amount > 0)
    .sort(([_, a], [__, b]) => b - a);

  sortedCategories.forEach(([categoryId, amount], index) => {
    const category = EXPENSE_CATEGORIES.find(c => c.id === categoryId);
    labels.push(category ? `${category.icon} ${category.name}` : 'Other');
    data.push(amount);
  });

  return {
    labels,
    datasets: [
      {
        data,
        backgroundColor: backgroundColors.slice(0, data.length),
      },
    ],
  };
});

// Prepare data for daily spending chart
const dailySpendingChartData = computed(() => {
  const { start, end } = periodRange.value;
  const days = eachDayOfInterval({ start, end });

  const labels = days.map(day => format(day, 'MMM d'));
  const data = days.map(day => {
    const dayStart = startOfDay(day);
    const dayEnd = endOfDay(day);

    return periodExpenses.value
      .filter(expense => {
        const expenseDate = parseISO(expense.date);
        return expenseDate >= dayStart && expenseDate <= dayEnd;
      })
      .reduce((sum, expense) => sum + expense.amount, 0);
  });

  return {
    labels,
    datasets: [
      {
        label: 'Daily Spending (EGP)',
        data,
        backgroundColor: '#0F766E',
      },
    ],
  };
});

// Get top expenses
const topExpenses = computed(() => {
  return [...periodExpenses.value]
    .sort((a, b) => b.amount - a.amount)
    .slice(0, 5);
});

// Helper function to get category icon
const getCategoryIcon = categoryId => {
  const category = EXPENSE_CATEGORIES.find(c => c.id === categoryId);
  return category ? category.icon : '📦';
};

// Format currency
const formatCurrency = (amount, currency) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency === 'CAD' ? 'CAD' : 'EGP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return formatter.format(amount);
};

// Helper function to format dates
const formatDate = date => {
  if (!date) return '';
  const d = new Date(date);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};
</script>
