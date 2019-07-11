

const coinChartData = {
  selctedCoin: 'BTC',
  chartsData: [] 
}



export function coinWalletReduser(state = coinChartData, { type, payload }) {
  switch (type) {
    case SELECT_COIN:
      return {
        ...state, 
        selctedCoin: payload.coin
      };
    case SET_CHART_DATA:
      return {
        ...state, 
        chartsData: payload.chartsData
      };
    default:
      return state;
  }
}
