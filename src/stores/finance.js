import { defineStore } from 'pinia';
import { getStockData } from '../api/stockData';  

export const useFinancialStore = defineStore('financial', {
  state: () => ({
    totalBalance: 0,
    totalInvestment: 0,
    totalSavings: 0,
    isLoading: false,
    errorMessage: ''
  }),
  actions: {
    async fetchFinancialData(symbol = 'AAPL') {  
      this.isLoading = true;
      this.errorMessage = '';
      try {
        const data = await getStockData(symbol);
        this.totalBalance = data.totalBalance;
        this.totalInvestment = data.totalInvestment;
        this.totalSavings = data.totalSavings;
      } catch (error) {
        this.errorMessage = 'Failed to load financial data. Please try again later.';
        this.totalBalance = 0;
        this.totalInvestment = 0;
        this.totalSavings = 0;
      } finally {
        this.isLoading = false;
      }
    }
  }
});
