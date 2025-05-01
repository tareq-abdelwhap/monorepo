import { defineStore } from 'pinia';
import localforage from 'localforage';
import { 
  startOfDay, endOfDay, startOfWeek, endOfWeek, 
  startOfMonth, endOfMonth, parseISO, isWithinInterval 
} from 'date-fns';

// Expense categories
export const EXPENSE_CATEGORIES = [
  { id: 'food', name: 'Food & Groceries', icon: '🍔' },
  { id: 'rent', name: 'Rent & Housing', icon: '🏠' },
  { id: 'transport', name: 'Transportation', icon: '🚌' },
  { id: 'utilities', name: 'Utilities', icon: '💡' },
  { id: 'entertainment', name: 'Entertainment', icon: '🎬' },
  { id: 'shopping', name: 'Shopping', icon: '🛍️' },
  { id: 'health', name: 'Health & Medical', icon: '🏥' },
  { id: 'education', name: 'Education', icon: '📚' },
  { id: 'other', name: 'Other', icon: '📦' }
];

export const useExpenseStore = defineStore('expense', {
  state: () => ({
    expenses: [],
    isLoading: false,
    error: null,
  }),
  
  getters: {
    totalExpenses: (state) => {
      return state.expenses.reduce((sum, expense) => sum + expense.amount, 0);
    },
    
    dailyExpenses: (state) => {
      const today = new Date();
      const start = startOfDay(today);
      const end = endOfDay(today);
      
      return state.expenses
        .filter(expense => {
          const expenseDate = parseISO(expense.date);
          return isWithinInterval(expenseDate, { start, end });
        })
        .reduce((sum, expense) => sum + expense.amount, 0);
    },

    expensesByCategory: (state) => {
      const categories = {};
      EXPENSE_CATEGORIES.forEach(category => {
        categories[category.id] = 0;
      });
      
      state.expenses.forEach(expense => {
        if (categories[expense.category] !== undefined) {
          categories[expense.category] += expense.amount;
        } else {
          categories.other = (categories.other || 0) + expense.amount;
        }
      });
      
      return categories;
    },
    
    expensesByPeriod: (state) => (period, customStart, customEnd) => {
      let start, end;
      const now = new Date();
      
      switch (period) {
        case 'day':
          start = startOfDay(now);
          end = endOfDay(now);
          break;
        case 'week':
          start = startOfWeek(now, { weekStartsOn: 1 });
          end = endOfWeek(now, { weekStartsOn: 1 });
          break;
        case 'month':
          start = startOfMonth(now);
          end = endOfMonth(now);
          break;
        case 'custom':
          start = customStart ? (typeof customStart === 'string' ? parseISO(customStart) : customStart) : startOfDay(now);
          end = customEnd ? (typeof customEnd === 'string' ? parseISO(customEnd) : customEnd) : endOfDay(now);
          break;
        default:
          start = startOfDay(now);
          end = endOfDay(now);
      }
      
      return state.expenses.filter(expense => {
        const expenseDate = parseISO(expense.date);
        return isWithinInterval(expenseDate, { start, end });
      });
    },
    
    expensesByCategoryAndPeriod: (state) => (period, customStart, customEnd) => {
      const expensesInPeriod = state.expensesByPeriod(period, customStart, customEnd);
      
      const categoryTotals = {};
      EXPENSE_CATEGORIES.forEach(category => {
        categoryTotals[category.id] = 0;
      });
      
      expensesInPeriod.forEach(expense => {
        if (categoryTotals[expense.category] !== undefined) {
          categoryTotals[expense.category] += expense.amount;
        } else {
          categoryTotals.other = (categoryTotals.other || 0) + expense.amount;
        }
      });
      
      return categoryTotals;
    },
  },
  
  actions: {
    async addExpense(expense) {
      try {
        this.isLoading = true;
        // Generate a unique ID
        const id = Date.now().toString();
        const newExpense = { id, ...JSON.parse(JSON.stringify(expense)) };
        
        // Add to state
        this.expenses.push(newExpense);
        
        // Save to storage
        await this.saveExpenses();
        
        return newExpense;
      } catch (error) {
        this.error = error.message;
        throw error;
      } finally {
        this.isLoading = false;
      }
    },
    
    async updateExpense(id, updatedData) {
      try {
        this.isLoading = true;
        // Find expense by ID
        const index = this.expenses.findIndex(e => e.id === id);
        if (index === -1) throw new Error('Expense not found');
        
        // Update the expense with plain object
        const plainData = JSON.parse(JSON.stringify(updatedData));
        this.expenses[index] = { ...this.expenses[index], ...plainData };
        
        // Save to storage
        await this.saveExpenses();
        
        return this.expenses[index];
      } catch (error) {
        this.error = error.message;
        throw error;
      } finally {
        this.isLoading = false;
      }
    },
    
    async deleteExpense(id) {
      try {
        this.isLoading = true;
        // Filter out the expense with the given ID
        this.expenses = this.expenses.filter(e => e.id !== id);
        
        // Save to storage
        await this.saveExpenses();
      } catch (error) {
        this.error = error.message;
        throw error;
      } finally {
        this.isLoading = false;
      }
    },
    
    async loadExpenses() {
      try {
        this.isLoading = true;
        const savedExpenses = await localforage.getItem('fintracker-expenses');
        if (savedExpenses) {
          this.expenses = savedExpenses;
        }
      } catch (error) {
        this.error = error.message;
        console.error('Failed to load expenses:', error);
      } finally {
        this.isLoading = false;
      }
    },
    
    async saveExpenses() {
      try {
        // Convert to plain object before saving
        const plainExpenses = JSON.parse(JSON.stringify(this.expenses));
        await localforage.setItem('fintracker-expenses', plainExpenses);
      } catch (error) {
        this.error = error.message;
        console.error('Failed to save expenses:', error);
        throw error;
      }
    },
  },
});