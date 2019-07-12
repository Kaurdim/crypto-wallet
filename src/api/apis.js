import moment from 'moment';
export const API_BASE_URL = 'https://min-api.cryptocompare.com/data/';

const fetchApi = async (params) => {
  const response = await fetch(API_BASE_URL + params);
  return await response.json();
}

export const getCurrentPriceData = async (coins, currency) => {
  return await fetchApi (`pricemulti?fsyms=${coins.join(',')}&tsyms=${currency}`);
} 


export async function getPurchasePriceData(coin, currency, interval) {
  const time = moment().subtract(interval.value, 'hours').unix();
  return await fetchApi(`dayAvg?fsym=${coin}&tsym=${currency}&toTs=${time}`);
} 


export async function getChartsPriceData(coin, currency, period) {
  return await fetchApi (`histohour?fsym=${coin}&tsym=${currency}&limit=${period}`);
} 