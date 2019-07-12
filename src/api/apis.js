import moment from 'moment';
export const API_BASE_URL = 'https://min-api.cryptocompare.com/data/';
const API_KEY = 'f063a080d11d4a24ed8b50773f8d6c731e25020ad3036aeb61569a498b599057';

const fetchApi = async (params) => {
  const response = await fetch(API_BASE_URL + params);
  return await response.json();
};

export const getCurrentPriceData = async (coins, currency) => {
  return await fetchApi (`pricemulti?fsyms=${coins.join(',')}&tsyms=${currency}&api_key=${API_KEY}`);
};


export async function getPurchasePriceData(coin, currency, interval) {
  const time = moment().subtract(interval.value, interval.unit).unix();
  return await fetchApi(`dayAvg?fsym=${coin}&tsym=${currency}&toTs=${time}&api_key=${API_KEY}`);
};


export async function getChartsPriceData(coin, currency, interval) {
  return await fetchApi(`histo${interval.unit}?fsym=${coin}&tsym=${currency}&limit=${interval.value}`);
} 
