<template>
  <div class="card">
    <h2 class="text-xl font-semibold mb-4">{{ title }}</h2>
    
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label for="amount" class="form-label">Amount (CAD)</label>
        <div class="relative">
          <span class="absolute left-3 top-2.5 text-gray-500">$</span>
          <input
            type="number"
            id="amount"
            v-model="amount"
            class="input pl-8"
            step="0.01"
            min="0"
            required
          />
        </div>
      </div>
      
      <div>
        <label for="exchangeRate" class="form-label">Exchange Rate (1 CAD = ? EGP)</label>
        <input
          type="number"
          id="exchangeRate"
          v-model="exchangeRate"
          class="input"
          step="0.01"
          min="0"
          required
        />
      </div>
      
      <div>
        <label for="date" class="form-label">Date</label>
        <input
          type="date"
          id="date"
          v-model="date"
          class="input"
          :max="today"
          required
        />
      </div>
      
      <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
        <div class="flex justify-between items-center">
          <span class="text-gray-700 dark:text-gray-300">Converted Amount (EGP)</span>
          <span class="text-xl font-bold">{{ convertedAmount }}</span>
        </div>
      </div>
      
      <button type="submit" class="btn btn-primary w-full">
        {{ submitButtonText }}
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { format } from 'date-fns';

const props = defineProps({
  title: {
    type: String,
    default: 'Currency Conversion'
  },
  initialAmount: {
    type: Number,
    default: 0
  },
  initialExchangeRate: {
    type: Number,
    default: 0
  },
  initialDate: {
    type: String,
    default: ''
  },
  submitButtonText: {
    type: String,
    default: 'Convert'
  }
});

const emit = defineEmits(['submit']);

// Form state
const amount = ref(props.initialAmount || 0);
const exchangeRate = ref(props.initialExchangeRate || 0);
const date = ref(props.initialDate || format(new Date(), 'yyyy-MM-dd'));

// Computed properties
const today = computed(() => format(new Date(), 'yyyy-MM-dd'));

const convertedAmount = computed(() => {
  if (!amount.value || !exchangeRate.value) return '0';
  
  const converted = amount.value * exchangeRate.value;
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'EGP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(converted);
});

// Watch for prop changes
watch(() => props.initialAmount, (newVal) => {
  if (newVal !== undefined) amount.value = newVal;
});

watch(() => props.initialExchangeRate, (newVal) => {
  if (newVal !== undefined) exchangeRate.value = newVal;
});

watch(() => props.initialDate, (newVal) => {
  if (newVal) date.value = newVal;
});

// Form submission
const handleSubmit = () => {
  const egpAmount = parseFloat(amount.value) * parseFloat(exchangeRate.value);
  
  emit('submit', {
    amountCAD: parseFloat(amount.value),
    exchangeRate: parseFloat(exchangeRate.value),
    amountEGP: egpAmount,
    date: date.value
  });
};
</script>