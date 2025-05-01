<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Settings</h1>
    
    <div class="card">
      <h2 class="text-xl font-semibold mb-4">Preferences</h2>
      
      <form @submit.prevent="saveSettings" class="space-y-6">
        <!-- Salary frequency -->
        <div>
          <label class="form-label">Salary Frequency</label>
          <div class="grid grid-cols-3 gap-2 mt-2">
            <button
              type="button"
              @click="settings.salaryFrequency = 'weekly'"
              class="btn"
              :class="settings.salaryFrequency === 'weekly' ? 'btn-primary' : 'btn-outline'"
            >
              Weekly
            </button>
            <button
              type="button"
              @click="settings.salaryFrequency = 'biweekly'"
              class="btn"
              :class="settings.salaryFrequency === 'biweekly' ? 'btn-primary' : 'btn-outline'"
            >
              Biweekly
            </button>
            <button
              type="button"
              @click="settings.salaryFrequency = 'monthly'"
              class="btn"
              :class="settings.salaryFrequency === 'monthly' ? 'btn-primary' : 'btn-outline'"
            >
              Monthly
            </button>
          </div>
        </div>
        
        <!-- Monthly budget goal -->
        <div>
          <label for="budget" class="form-label">Monthly Budget Goal (EGP)</label>
          <div class="relative">
            <input
              type="number"
              id="budget"
              v-model="settings.monthlyBudgetGoal"
              class="input"
              step="100"
              min="0"
            />
          </div>
        </div>
        
        <!-- Toggle features -->
        <div>
          <label class="form-label">Features</label>
          
          <div class="space-y-3 mt-2">
            <div class="flex items-center">
              <input
                type="checkbox"
                id="notifications"
                v-model="settings.notificationsEnabled"
                class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label for="notifications" class="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                Enable Notifications
              </label>
            </div>
            
            <div class="flex items-center">
              <input
                type="checkbox"
                id="autofetch"
                v-model="settings.autofetchExchangeRate"
                class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label for="autofetch" class="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                Auto-fetch Exchange Rate
              </label>
            </div>
          </div>
        </div>
        
        <!-- Default expense categories -->
        <div>
          <label class="form-label">Default Expense Categories</label>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">
            Select categories that appear first when adding expenses
          </p>
          
          <div class="grid grid-cols-2 md:grid-cols-3 gap-2">
            <div v-for="category in categories" :key="category.id" class="flex items-center">
              <input
                type="checkbox"
                :id="`cat-${category.id}`"
                v-model="selectedCategories"
                :value="category.id"
                class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label :for="`cat-${category.id}`" class="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                {{ category.icon }} {{ category.name }}
              </label>
            </div>
          </div>
        </div>
        
        <!-- Data management -->
        <div class="border-t pt-4">
          <h3 class="text-lg font-medium mb-3">Data Management</h3>
          
          <div class="space-y-3">
            <button type="button" @click="exportData" class="btn btn-outline w-full">
              Export Data
            </button>
            
            <button type="button" @click="confirmReset" class="btn w-full bg-red-600 hover:bg-red-700 text-white">
              Reset All Data
            </button>
          </div>
        </div>
        
        <!-- Save button -->
        <div class="pt-2">
          <button type="submit" class="btn btn-primary w-full">
            Save Settings
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useSettingsStore } from '~/stores/settings';
import { useSalaryStore } from '~/stores/salary';
import { useExpenseStore, EXPENSE_CATEGORIES } from '~/stores/expense';

const settingsStore = useSettingsStore();
const salaryStore = useSalaryStore();
const expenseStore = useExpenseStore();

// Categories
const categories = EXPENSE_CATEGORIES;

// Settings form
const settings = ref({
  salaryFrequency: 'biweekly',
  monthlyBudgetGoal: 5000,
  notificationsEnabled: true,
  autofetchExchangeRate: false,
  defaultExpenseCategories: []
});

// Selected categories
const selectedCategories = ref([]);

// Load settings on mount
onMounted(() => {
  // Load settings from store
  settings.value = {
    salaryFrequency: settingsStore.salaryFrequency,
    monthlyBudgetGoal: settingsStore.monthlyBudgetGoal,
    notificationsEnabled: settingsStore.notificationsEnabled,
    autofetchExchangeRate: settingsStore.autofetchExchangeRate,
  };
  
  // Load selected categories
  selectedCategories.value = [...settingsStore.defaultExpenseCategories];
});

// Save settings
const saveSettings = async () => {
  try {
    // Update settings with selected categories
    const updatedSettings = {
      ...settings.value,
      defaultExpenseCategories: selectedCategories.value
    };
    
    // Save to store
    await settingsStore.updateSettings(updatedSettings);
    
    alert('Settings saved successfully!');
  } catch (error) {
    console.error('Error saving settings:', error);
    alert('Failed to save settings. Please try again.');
  }
};

// Export data
const exportData = () => {
  try {
    const exportData = {
      salaries: salaryStore.salaries,
      expenses: expenseStore.expenses,
      settings: {
        salaryFrequency: settingsStore.salaryFrequency,
        monthlyBudgetGoal: settingsStore.monthlyBudgetGoal,
        notificationsEnabled: settingsStore.notificationsEnabled,
        autofetchExchangeRate: settingsStore.autofetchExchangeRate,
        defaultExpenseCategories: settingsStore.defaultExpenseCategories
      }
    };
    
    // Convert to JSON and create download link
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileName = `finance-tracker-export-${new Date().toISOString().slice(0, 10)}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileName);
    linkElement.click();
  } catch (error) {
    console.error('Error exporting data:', error);
    alert('Failed to export data. Please try again.');
  }
};

// Confirm reset
const confirmReset = () => {
  const confirmed = confirm('Are you sure you want to reset all data? This action cannot be undone.');
  
  if (confirmed) {
    resetAllData();
  }
};

// Reset all data
const resetAllData = async () => {
  try {
    // Clear salaries and expenses
    salaryStore.salaries = [];
    await salaryStore.saveSalaries();
    
    expenseStore.expenses = [];
    await expenseStore.saveExpenses();
    
    // Reset settings to defaults
    settingsStore.initializeSettings();
    
    // Reload settings form
    settings.value = {
      salaryFrequency: settingsStore.salaryFrequency,
      monthlyBudgetGoal: settingsStore.monthlyBudgetGoal,
      notificationsEnabled: settingsStore.notificationsEnabled,
      autofetchExchangeRate: settingsStore.autofetchExchangeRate,
    };
    
    selectedCategories.value = [...settingsStore.defaultExpenseCategories];
    
    alert('All data has been reset successfully.');
  } catch (error) {
    console.error('Error resetting data:', error);
    alert('Failed to reset data. Please try again.');
  }
};
</script>