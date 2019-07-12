import { SELECT_COIN, SET_CHART_DATA } from '../constants';

const coinChartData = {
  selctedCoin: 'BTC',
  data: [] 
}

export function coinsChartReduser(state = coinChartData, { type, payload }) {
  switch (type) {
    case SELECT_COIN:
      return {
        ...state, 
        selctedCoin: payload.coin
      };
    case SET_CHART_DATA:
      return {
        ...state, 
        data: payload.chartData
      };
    default:
      return state;
  }
}
