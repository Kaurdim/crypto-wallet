import { 
  SET_COIN_CURRENT_PRICE, SET_COIN_SUBSTRACT_PRICE } from '../constants';
import { calculateProfit } from '../utils';

const rundomValues = (min, max, round = 2) => {
  return Number((Math.random() * (max - min) + min).toFixed(round));
}

const expampleCoins = [
  {
    name: 'BTC',
    textName: 'bitcoin'
  },
  {
    name: 'ETH',
    textName: 'ethereum' 
  },
  {
    name: 'XRP',
    textName: 'ripple'
  },
  {
    name: 'LTC',
    textName: 'litecoin',

  }
]

const coins = expampleCoins.map(coin => ({
  ...coin,
  amount: rundomValues(0.1, 5, 5),
  price: null,
  currentPrice: null,
  profit: null
}));

const walletState = {
  coins,
  walletPrise: null
}


export function coinWalletReduser(state = walletState, { type, payload }) {
  switch (type) {
    case SET_COIN_CURRENT_PRICE:
      return {
        ...state, 
        coins: state.coins.map(coin => ({
          ...coin,
          currentPrice: payload.prices[coin.name][payload.currency]
        }))
      };
    case SET_COIN_SUBSTRACT_PRICE:
      return {
        ...state, 
        coins: state.coins.map(coin => ({
          ...coin,
          price: payload.prices[coin.name]
        }))
      };
    default:
      return state;
  }
}
