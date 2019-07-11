import { API_BASE_URL } from './common';

export async function getCurrentPriceData(coins, currency = 'USD') {
  const response = await fetch(API_BASE_URL + `?fsyms=${coins.join(',')}&tsyms=${currency}`);
  return await response.json();
} 