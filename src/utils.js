import moment from 'moment';

export const calculateProfit = (amount, price, currentPrice) => {
  if (!amount || !price || !currentPrice) {
    return 0;
  }
  return ((amount * currentPrice) * 100 / (amount * price) - 100);
};

export const prepareDataForChart = (data) => {
  return data.map(d => ({
    t: moment.unix(d.time),
    y: d.close
  }))
};


export const prepareProfitValue = (value, symbol = '') => {
  const prepareValue = Math.abs(value).toFixed(2);
  switch (value > 0) {
    case true:
      return `+ ${prepareValue} ${symbol}`;
    case false:
      return `- ${prepareValue} ${symbol}`;
    default:
      return prepareValue;
  }
}