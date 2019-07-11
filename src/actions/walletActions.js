import { getCurrentPriceData } from '../api/common';
import { SET_COIN_CURRENT_PRICE } from '../constants';

export function getCoinsCurrentPrice(coins, currency = 'USD') {
  return async dispatch => {
    try {
      const prices = await getCurrentPriceData(coins, currency);
      dispatch(setCurrentPrice(prices, currency));
    } catch (error) { 
        console.log(error);
    }
  }
}

export function setCurrentPrice(prices, currency) {
  return {
    payload: {
      prices,
      currency
    },
    type: SET_COIN_CURRENT_PRICE,
  };
}
