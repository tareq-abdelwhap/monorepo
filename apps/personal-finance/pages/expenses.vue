<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Expenses</h1>
    
    <!-- Add new expense form -->
    <div class="card mb-6">
      <h2 class="text-xl font-semibold mb-4">Add New Expense</h2>
      
      <form @submit.prevent="handleExpenseSubmit" class="space-y-4">
        <div>
          <label for="description" class="form-label">Description</label>
          <input
            type="text"
            id="description"
            v-model="expenseForm.description"
            class="input"
            required
            placeholder="What did you spend on?"
          />
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label for="amount" class="form-label">Amount (EGP)</label>
            <div class="relative">
              <input
                type="number"
                id="amount"
                v-model="expenseForm.amount"
                class="input"
                step="0.01"
                min="0"
                required
              />
            </div>
          </div>
          
          <div>
            <label for="category" class="form-label">Category</label>
            <select
              id="category"
              v-model="expenseForm.category"
              class="input"
              required
            >
              <option v-for="category in categories" :key="category.id" :value="category.id">
                {{ category.icon }} {{ category.name }}
              </option>
            </select>
          </div>
        </div>
        
        <div>
          <label for="expenseDate" class="form-label">Date</label>
          <input
            type="date"
            id="expenseDate"
            v-model="expenseForm.date"
            class="input"
            :max="today"
            required
          />
        </div>
        
        <button type="submit" class="btn btn-primary w-full">
          Add Expense
        </button>
      </form>
    </div>
    
    <!-- Filter controls -->
    <div class="flex flex-wrap gap-2 mb-4">
      <button 
        v-for="filter in timeFilters" 
        :key="filter.value"
        @click="setTimeFilter(filter.value)"
        class="btn"
        :class="timeFilter === filter.value ? 'btn-primary' : 'btn-outline'"
      >
        {{ filter.label }}
      </button>
    </div>
    
    <!-- Expenses list -->
    <div class="card">
      <h2 class="text-xl font-semibold mb-4">
        {{ filterTitle }} Expenses
      </h2>
      
      <ExpenseList :expenses="filteredExpenses" />
      
      <div v-if="filteredExpenses.length" class="mt-4 text-right">
        <p class="font-semibold">
          Total: {{ formatCurrency(totalFilteredAmount, 'EGP') }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { format, startOfDay, endOfDay, startOfWeek, endOfWeek, subDays, startOfMonth, endOfMonth } from 'date-fns';
import { useExpenseStore, EXPENSE_CATEGORIES } from '~/stores/expense';

const expenseStore = useExpenseStore();

// Form state
const expenseForm = ref({
  description: '',
  amount: '',
  category: 'food',
  date: format(new Date(), 'yyyy-MM-dd')
});

// Time filter options
const timeFilters = [
  { label: 'Today', value: 'today' },
  { label: 'Yesterday', value: 'yesterday' },
  { label: 'This Week', value: 'week' },
  { label: 'This Month', value: 'month' },
  { label: 'All', value: 'all' }
];

const timeFilter = ref('today');

// Filter titles
const filterTitle = computed(() => {
  switch (timeFilter.value) {
    case 'today': return 'Today\'s';
    case 'yesterday': return 'Yesterday\'s';
    case 'week': return 'This Week\'s';
    case 'month': return 'This Month\'s';
    default: return 'All';
  }
});

// Current date
const today = computed(() => format(new Date(), 'yyyy-MM-dd'));

// Categories from the store
const categories = EXPENSE_CATEGORIES;

// Set time filter
const setTimeFilter = (filter) => {
  timeFilter.value = filter;
};

// Get filtered expenses based on time filter
const filteredExpenses = computed(() => {
  const now = new Date();
  let start, end;
  
  switch (timeFilter.value) {
    case 'today':
      start = startOfDay(now);
      end = endOfDay(now);
      break;
    case 'yesterday':
      start = startOfDay(subDays(now, 1));
      end = endOfDay(subDays(now, 1));
      break;
    case 'week':
      start = startOfWeek(now, { weekStartsOn: 1 });
      end = endOfWeek(now, { weekStartsOn: 1 });
      break;
    case 'month':
      start = startOfMonth(now);
      end = endOfMonth(now);
      break;
    default:
      // Return all expenses for 'all' filter
      return [...expenseStore.expenses].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
  }
  
  // Filter expenses by date range
  return expenseStore.expensesByPeriod('custom', start, end)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
});

// Calculate total amount of filtered expenses
const totalFilteredAmount = computed(() => {
  return filteredExpenses.value.reduce((sum, expense) => sum + expense.amount, 0);
});

// Handle expense form submission
const handleExpenseSubmit = async () => {
  try {
    // Create expense object
    const expense = {
      description: expenseForm.value.description,
      amount: parseFloat(expenseForm.value.amount),
      category: expenseForm.value.category,
      date: expenseForm.value.date
    };
    
    // Add to store
    await expenseStore.addExpense(expense);
    
    // Reset form
    expenseForm.value = {
      description: '',
      amount: '',
      category: 'food',
      date: format(new Date(), 'yyyy-MM-dd')
    };
    
    // Show success notification
    alert('Expense added successfully!');
  } catch (error) {
    console.error('Error adding expense:', error);
    alert('Failed to add expense. Please try again.');
  }
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
</script>