<template>
  <div class="space-y-4">
    <SalaryCard :salary="latestSalary" :next-salary-date="nextSalaryDate" />
    
    <div class="card">
      <h2 class="text-xl font-semibold mb-3">Summary</h2>
      <div class="grid grid-cols-2 gap-3">
        <div class="p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
          <p class="text-sm text-gray-600 dark:text-gray-300">Total Income (EGP)</p>
          <p class="text-2xl font-bold text-green-700 dark:text-green-400">
            {{ formatCurrency(totalIncomeEGP, 'EGP') }}
          </p>
        </div>
        <div class="p-3 bg-red-50 dark:bg-red-900/30 rounded-lg">
          <p class="text-sm text-gray-600 dark:text-gray-300">Total Expenses</p>
          <p class="text-2xl font-bold text-red-700 dark:text-red-400">
            {{ formatCurrency(totalExpenses, 'EGP') }}
          </p>
        </div>
      </div>
      
      <div class="mt-4">
        <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Monthly Budget</h3>
        <ProgressBar 
          :percentage="budgetPercentage" 
          :label="`${budgetPercentage}% of budget used`" 
          :color="budgetBarColor" 
        />
      </div>
    </div>
    
    <div class="card">
      <div class="flex justify-between items-center mb-3">
        <h2 class="text-xl font-semibold">Recent Expenses</h2>
        <NuxtLink to="/expenses" class="text-sm text-primary-700 dark:text-primary-400">View all</NuxtLink>
      </div>
      <ExpenseList :expenses="recentExpenses" :limit="3" />
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useSalaryStore } from '~/stores/salary';
import { useExpenseStore } from '~/stores/expense';
import { useSettingsStore } from '~/stores/settings';
import { startOfMonth, endOfMonth } from 'date-fns';

const salaryStore = useSalaryStore();
const expenseStore = useExpenseStore();
const settingsStore = useSettingsStore();

// Get relevant data from stores
const latestSalary = computed(() => salaryStore.latestSalary);
const totalIncomeEGP = computed(() => salaryStore.totalEGP);
const totalExpenses = computed(() => expenseStore.totalExpenses);
const monthlyBudgetGoal = computed(() => settingsStore.monthlyBudgetGoal);
const salaryFrequency = computed(() => settingsStore.salaryFrequency);

// Compute next salary date
const nextSalaryDate = computed(() => {
  return salaryStore.nextSalaryDate(salaryFrequency.value);
});

// Get recent expenses
const recentExpenses = computed(() => {
  return expenseStore.expenses
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);
});

// Calculate budget percentage
const budgetPercentage = computed(() => {
  if (!monthlyBudgetGoal.value) return 0;
  
  // Get expenses for the current month
  const now = new Date();
  const monthStart = startOfMonth(now);
  const monthEnd = endOfMonth(now);
  const monthlyExpenses = expenseStore.expensesByPeriod('month');
  const totalMonthlyExpenses = monthlyExpenses.reduce((sum, exp) => sum + exp.amount, 0);
  
  const percentage = Math.round((totalMonthlyExpenses / monthlyBudgetGoal.value) * 100);
  return Math.min(percentage, 100); // Cap at 100%
});

// Determine color for budget bar
const budgetBarColor = computed(() => {
  if (budgetPercentage.value < 70) return 'bg-success-500';
  if (budgetPercentage.value < 90) return 'bg-warning-500';
  return 'bg-error-500';
});

// Helper function to format currency
const formatCurrency = (amount, currency) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency === 'CAD' ? 'CAD' : 'EGP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return formatter.format(amount);
};
</script>