import { SET_COIN_CURRENT_PRICE } from '../constants';


const rundomValues = (min, max, round = 2) => {
  return Number((Math.random() * (max - min) + min).toFixed(round));
}

const coins = ['BTC', 'ETH', 'XRP', 'BCH'].map(coin => ({
  name: coin,
  amount: rundomValues(0.1, 10, 5),
  price: rundomValues(10, 10000),
  currentPrice: null
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
          currentPrice: payload.currentPrices[coin.name][payload.currency]
        }))
      };
    default:
      return state;
  }
}
