import { getChartsPriceData } from '../api/apis';
import { SELECT_COIN, SET_CHART_DATA } from '../constants';
import { prepareDataForChart } from '../utils';

export function getChartDataAction(coinName, currency, period) {
  return async dispatch => {
    try {
      const { Data } = await getChartsPriceData(coinName, currency, period);
      dispatch(setChartData(prepareDataForChart(Data)));
    } catch (error) {
      console.log(error);
    }
  } 
}

export function selectCoin(coin) {
  return {
    payload: {
      coin
    },
    type: SELECT_COIN,
  };
}


export function setChartData(data) {
  return {
    payload: {
      chartData: data
    },
    type: SET_CHART_DATA,
  };
}