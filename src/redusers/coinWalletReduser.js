import { SET_COIN_CURRENT_PRICE } from '../constants';
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
  amount: rundomValues(0.1, 10, 5),
  price: rundomValues(10, 10000),
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
    case SET_COIN_PRICE:
      return {
        ...state, 
        coins: state.coins.map(coin => ({
          ...coin,
          price: payload.prices[coin.name][payload.currency]
        }))
      };
    case SET_COIN_PROFIT:
      return {
        ...state, 
        coins: state.coins.map(coin => ({
          ...coin,
          profit: calculateProfit(coins.amount, coins.price, coin.currentPrice)
        }))
      };
    case CALCULATE_WALLET_PRISE:
      return {
        ...state, 
        walletPrise: state.coins.reduce((sum, coin) => sum + coin.currentPrice, 0)
      };
    default:
      return state;
  }
}
