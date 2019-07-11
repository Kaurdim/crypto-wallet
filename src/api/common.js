import moment from 'moment';
export const API_BASE_URL = 'https://min-api.cryptocompare.com/data/';

export const fetchApi = async (params) => {
  const response = await fetch(API_BASE_URL + params);
  return await response.json();
}

export async function getCurrentPriceData(coins, currency = 'USD') {
  return await fetchApi (`pricemulti?fsyms=${coins.join(',')}&tsyms=${currency}`);
} 


export async function getPurchasePriceData(coin, currency = 'USD') {
  const time = moment().subtract('months', 8).unix();
  return await fetchApi (`dayAvg?fsym=${coin}&tsyms=${currency}&ts=${time}`);
} 


export async function getChartsPriceData(coin, currency = 'USD', period) {
  return await fetchApi (`histohour?fsym=${coin}&tsym=${currency}&limit=${period}`);
} 