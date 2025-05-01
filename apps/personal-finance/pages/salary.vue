<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Salary Management</h1>
    
    <!-- Form to add new salary -->
    <ExchangeRateForm 
      title="Record New Salary"
      submit-button-text="Save Salary"
      @submit="handleSalarySubmit"
    />
    
    <!-- Salary History -->
    <div v-if="salaries.length" class="mt-6 card">
      <h2 class="text-xl font-semibold mb-3">Salary History</h2>
      
      <div class="space-y-3">
        <div v-for="salary in salaries" :key="salary.id"
          class="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
          <div>
            <p class="font-medium">{{ formatCurrency(salary.amountCAD, 'CAD') }}</p>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              {{ formatDate(salary.date) }} • {{ salary.exchangeRate }} EGP/CAD
            </p>
          </div>
          <div class="text-right">
            <p class="font-semibold text-green-600 dark:text-green-400">
              {{ formatCurrency(salary.amountEGP, 'EGP') }}
            </p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- No data message -->
    <div v-else class="mt-6 text-center p-6 card">
      <p class="text-gray-500 dark:text-gray-400">No salary records yet</p>
    </div>
  </div>
</template>

<script setup>
import { useSalaryStore } from '~/stores/salary';
import { ref, computed } from 'vue';

const salaryStore = useSalaryStore();

// Get salaries from store
const salaries = computed(() => {
  // Sort by date in descending order
  return [...salaryStore.salaries].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
});

// Handle salary form submission
const handleSalarySubmit = async (salaryData) => {
  try {
    // Add description and notes
    const fullSalaryData = {
      ...salaryData,
      description: `Salary payment`,
      notes: ''
    };
    
    await salaryStore.addSalary(fullSalaryData);
    
    // Show success notification
    alert('Salary saved successfully!');
  } catch (error) {
    console.error('Error saving salary:', error);
    alert('Failed to save salary. Please try again.');
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

// Helper function to format dates
const formatDate = (date) => {
  if (!date) return '';
  const d = new Date(date);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};
</script>