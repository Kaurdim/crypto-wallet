import { combineReducers } from 'redux';
import { coinWalletReduser } from './coinWalletReduser';
import { coinsChartReduser } from './coinsChartReduser';
import { intervalReduser } from './intervalReducer';

export const rootReducer =  combineReducers({
  wallet: coinWalletReduser,
  chartData: coinsChartReduser,
  interval: intervalReduser
});