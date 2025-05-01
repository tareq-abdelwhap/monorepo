<template>
  <div class="card bg-gradient-to-r from-primary-700 to-primary-800 text-white">
    <div v-if="salary" class="space-y-3">
      <div class="flex justify-between items-center">
        <h2 class="text-xl font-semibold">Latest Salary</h2>
        <span class="text-sm bg-white/20 px-2 py-1 rounded">{{ formatDate(salary.date) }}</span>
      </div>
      
      <div class="grid grid-cols-2 gap-4">
        <div>
          <p class="text-sm opacity-80">CAD Amount</p>
          <p class="text-2xl font-bold">{{ formatCurrency(salary.amountCAD, 'CAD') }}</p>
        </div>
        <div>
          <p class="text-sm opacity-80">EGP Equivalent</p>
          <p class="text-2xl font-bold">{{ formatCurrency(salary.amountEGP, 'EGP') }}</p>
        </div>
      </div>
      
      <div class="text-sm bg-black/10 p-2 rounded">
        <p>Exchange Rate: 1 CAD = {{ salary.exchangeRate }} EGP</p>
      </div>
      
      <div v-if="nextSalaryDate" class="flex items-center gap-2 mt-2 bg-white/10 p-2 rounded">
        <span>📅</span>
        <p>Next salary: {{ formatDate(nextSalaryDate) }}</p>
      </div>
    </div>
    
    <div v-else class="py-3">
      <p class="text-center">No salary recorded yet</p>
      <NuxtLink to="/salary" class="btn btn-outline bg-white/20 hover:bg-white/30 w-full text-center mt-3">
        Add your first salary
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  salary: {
    type: Object,
    default: null
  },
  nextSalaryDate: {
    type: Date,
    default: null
  }
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

// Helper function to format dates
const formatDate = (date) => {
  if (!date) return '';
  const d = new Date(date);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};
</script>