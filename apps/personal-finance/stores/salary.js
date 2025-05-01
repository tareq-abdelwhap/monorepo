import { defineStore } from 'pinia';
import localforage from 'localforage';
import { addDays, format, parseISO, isAfter } from 'date-fns';

export const useSalaryStore = defineStore('salary', {
  state: () => ({
    salaries: [],
    isLoading: false,
    error: null,
  }),
  
  getters: {
    latestSalary: (state) => {
      if (!state.salaries.length) return null;
      // Sort by date descending and return the first item
      return [...state.salaries].sort((a, b) => 
        isAfter(parseISO(b.date), parseISO(a.date)) ? 1 : -1
      )[0];
    },
    
    totalCAD: (state) => {
      return state.salaries.reduce((sum, salary) => sum + salary.amountCAD, 0);
    },
    
    totalEGP: (state) => {
      return state.salaries.reduce((sum, salary) => sum + salary.amountEGP, 0);
    },
    
    nextSalaryDate: (state) => (frequency) => {
      if (!state.salaries.length) return null;
      
      // Sort by date descending
      const sortedSalaries = [...state.salaries].sort((a, b) => 
        isAfter(parseISO(b.date), parseISO(a.date)) ? 1 : -1
      );
      
      const lastSalaryDate = parseISO(sortedSalaries[0].date);
      
      // frequency in days (14 for biweekly)
      const daysToAdd = frequency === 'biweekly' ? 14 : 
                       frequency === 'monthly' ? 30 : 
                       frequency === 'weekly' ? 7 : 14;
                       
      return addDays(lastSalaryDate, daysToAdd);
    },
    
    salariesByPeriod: (state) => (startDate, endDate) => {
      const start = typeof startDate === 'string' ? parseISO(startDate) : startDate;
      const end = typeof endDate === 'string' ? parseISO(endDate) : endDate;
      
      return state.salaries.filter(salary => {
        const salaryDate = parseISO(salary.date);
        return (salaryDate >= start && salaryDate <= end);
      });
    },
  },
  
  actions: {
    async addSalary(salary) {
      try {
        this.isLoading = true;
        // Generate a unique ID
        const id = Date.now().toString();
        const newSalary = { id, ...JSON.parse(JSON.stringify(salary)) };
        
        // Add to state
        this.salaries.push(newSalary);
        
        // Save to storage
        await this.saveSalaries();
        
        return newSalary;
      } catch (error) {
        this.error = error.message;
        throw error;
      } finally {
        this.isLoading = false;
      }
    },
    
    async updateSalary(id, updatedData) {
      try {
        this.isLoading = true;
        // Find salary by ID
        const index = this.salaries.findIndex(s => s.id === id);
        if (index === -1) throw new Error('Salary not found');
        
        // Update the salary with plain object
        const plainData = JSON.parse(JSON.stringify(updatedData));
        this.salaries[index] = { ...this.salaries[index], ...plainData };
        
        // Save to storage
        await this.saveSalaries();
        
        return this.salaries[index];
      } catch (error) {
        this.error = error.message;
        throw error;
      } finally {
        this.isLoading = false;
      }
    },
    
    async deleteSalary(id) {
      try {
        this.isLoading = true;
        // Filter out the salary with the given ID
        this.salaries = this.salaries.filter(s => s.id !== id);
        
        // Save to storage
        await this.saveSalaries();
      } catch (error) {
        this.error = error.message;
        throw error;
      } finally {
        this.isLoading = false;
      }
    },
    
    async loadSalaries() {
      try {
        this.isLoading = true;
        const savedSalaries = await localforage.getItem('fintracker-salaries');
        if (savedSalaries) {
          this.salaries = savedSalaries;
        }
      } catch (error) {
        this.error = error.message;
        console.error('Failed to load salaries:', error);
      } finally {
        this.isLoading = false;
      }
    },
    
    async saveSalaries() {
      try {
        // Convert to plain object before saving
        const plainSalaries = JSON.parse(JSON.stringify(this.salaries));
        await localforage.setItem('fintracker-salaries', plainSalaries);
      } catch (error) {
        this.error = error.message;
        console.error('Failed to save salaries:', error);
        throw error;
      }
    },
  },
});