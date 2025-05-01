import { defineStore } from 'pinia';
import localforage from 'localforage';
import { toRaw } from 'vue';

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    // User preferences
    salaryFrequency: 'biweekly', // biweekly, monthly, weekly
    monthlyBudgetGoal: 0, // In EGP
    notificationsEnabled: true,
    autofetchExchangeRate: false,
    defaultExpenseCategories: [], // Array of most used categories
    
    // App state
    isInitialized: false,
    isLoading: false,
    error: null,
  }),
  
  actions: {
    initializeSettings() {
      // Set default settings for first-time users
      this.salaryFrequency = 'biweekly';
      this.monthlyBudgetGoal = 5000; // Default budget goal in EGP
      this.notificationsEnabled = true;
      this.autofetchExchangeRate = false;
      this.defaultExpenseCategories = ['food', 'transport', 'rent'];
      this.isInitialized = true;
      
      // Save settings
      this.saveSettings();
    },
    
    async updateSettings(newSettings) {
      try {
        this.isLoading = true;
        // Convert newSettings to plain object if it's reactive
        const plainSettings = JSON.parse(JSON.stringify(newSettings));
        // Update state with new settings
        Object.assign(this, plainSettings);
        
        // Save to storage
        await this.saveSettings();
      } catch (error) {
        this.error = error.message;
        throw error;
      } finally {
        this.isLoading = false;
      }
    },
    
    async loadSettings() {
      try {
        this.isLoading = true;
        const savedSettings = await localforage.getItem('fintracker-settings');
        if (savedSettings) {
          // Update state with saved settings
          Object.assign(this, savedSettings);
        }
      } catch (error) {
        this.error = error.message;
        console.error('Failed to load settings:', error);
      } finally {
        this.isLoading = false;
      }
    },
    
    async saveSettings() {
      try {
        // Extract only the settings we want to save
        const settingsToSave = {
          salaryFrequency: this.salaryFrequency,
          monthlyBudgetGoal: this.monthlyBudgetGoal,
          notificationsEnabled: this.notificationsEnabled,
          autofetchExchangeRate: this.autofetchExchangeRate,
          defaultExpenseCategories: this.defaultExpenseCategories,
          isInitialized: true,
        };
        
        // Convert to plain object before saving
        const plainSettings = JSON.parse(JSON.stringify(settingsToSave));
        await localforage.setItem('fintracker-settings', plainSettings);
      } catch (error) {
        this.error = error.message;
        console.error('Failed to save settings:', error);
        throw error;
      }
    },
  },
});