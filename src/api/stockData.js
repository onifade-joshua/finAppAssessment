import axios from 'axios';

const API_KEY = 'cb0a94fe00424a5f9ebffea7952069dc'; 
const API_URL = 'https://api.twelvedata.com/time_series';

export async function getStockData(symbol) {
  try {
    const response = await axios.get(API_URL, {
      params: {
        symbol: symbol,
        interval: '1day',  
        apikey: API_KEY,
      },
    });

    console.log('API Response:', response.data); 

    if (!response.data || response.data.status === 'error') {
      throw new Error('Failed to fetch data');
    }

    const stockData = response.data.values[0]; 
    const latestClosePrice = parseFloat(stockData.close);
    const numberOfStocksOwned = 100; 

    return {
      totalBalance: latestClosePrice * numberOfStocksOwned,
      totalInvestment: 5000, 
      totalSavings: 3000, 
    };
  } catch (error) {
    console.error('Error fetching stock data:', error.message);
    return { totalBalance: 0, totalInvestment: 0, totalSavings: 0 }; 
  }
}
