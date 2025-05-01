import { onMounted } from 'vue';
import { useSalaryStore } from '~/stores/salary';
import { useExpenseStore } from '~/stores/expense';
import { useSettingsStore } from '~/stores/settings';
import { storeToRefs } from 'pinia';

export function useAppSetup() {
  const salaryStore = useSalaryStore();
  const expenseStore = useExpenseStore();
  const settingsStore = useSettingsStore();
  
  // Initialize with default settings if first time
  const initializeApp = async () => {
    // Load saved data from localStorage/IndexedDB
    await Promise.all([
      salaryStore.loadSalaries(),
      expenseStore.loadExpenses(),
      settingsStore.loadSettings()
    ]);
    
    // Set default settings if none exist
    if (!settingsStore.isInitialized) {
      settingsStore.initializeSettings();
    }
  };
  
  onMounted(() => {
    initializeApp();
  });
  
  return {
    initializeApp
  };
}