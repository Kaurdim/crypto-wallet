import { getCurrentPriceData, getPurchasePriceData } from '../api/apis';
import { SET_COIN_CURRENT_PRICE, SET_COIN_SUBSTRACT_PRICE } from '../constants';

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

export function setCoinsSubstractPrice(coins, currency = 'USD', interval) {
  return async dispatch => {
    try {
      let prices = {};
      for await (const priceData of getSubstractPrice(coins, currency, interval)) {
        prices[priceData.coin] = priceData.price;
      }
      dispatch(setSubstractPrice(prices));
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

export function setSubstractPrice(prices) {
  return {
    payload: {
      prices,
    },
    type: SET_COIN_SUBSTRACT_PRICE,
  };
} 


async function* getSubstractPrice(coins, currency, interval) {
  for (const coin of coins) {
    const price = await getPurchasePriceData(coin, currency, interval);
    yield {
      coin,
      price: price[currency]
    } 
  }
}