
export const calculateProfit = (amount, price, currentPrice) => {
  return ((amount * currentPrice) / 100 * (amount * price));
}