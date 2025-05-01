<template>
  <div>
    <div v-if="expenses.length" class="space-y-3">
      <div v-for="expense in limitedExpenses" :key="expense.id" 
        class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-xl">
            {{ getCategoryIcon(expense.category) }}
          </div>
          <div>
            <p class="font-medium">{{ expense.description }}</p>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              {{ getCategoryName(expense.category) }} • {{ formatDate(expense.date) }}
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
      <p class="text-gray-500 dark:text-gray-400">No expenses recorded</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { EXPENSE_CATEGORIES } from '~/stores/expense';

const props = defineProps({
  expenses: {
    type: Array,
    default: () => []
  },
  limit: {
    type: Number,
    default: 0
  }
});

// Apply limit if provided
const limitedExpenses = computed(() => {
  if (props.limit > 0) {
    return props.expenses.slice(0, props.limit);
  }
  return props.expenses;
});

// Helper functions for categories
const getCategoryIcon = (categoryId) => {
  const category = EXPENSE_CATEGORIES.find(c => c.id === categoryId);
  return category ? category.icon : '📦';
};

const getCategoryName = (categoryId) => {
  const category = EXPENSE_CATEGORIES.find(c => c.id === categoryId);
  return category ? category.name : 'Other';
};

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

// Helper function to format dates
const formatDate = (date) => {
  if (!date) return '';
  const d = new Date(date);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};
</script>