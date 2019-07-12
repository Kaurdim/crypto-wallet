import React from 'react';

import { TextTile } from './TextTile';
import { calculateProfit, prepareProfitValue } from '../../utils';
import '../../styles/BigTail.scss';

export const BigTail = ({ coin, onClick }) => {
  const { name, amount, price, currentPrice, textName } = coin;

  const profit = calculateProfit(amount, price, currentPrice);
  return (
    <div className='big-tail' onClick={onClick}>
      <div className='coin-info tail-row'>
        <TextTile mainText={coin.name} align='left' subText={textName} icon={name}/> 
        <TextTile mainText={coin.amount} subText={'$' + (coin.amount * coin.currentPrice).toFixed(2)} />
      </div>
      <div className='coin-price tail-row'>
        <TextTile mainText={'$' + coin.currentPrice} subText='Price' align='left'/>
        <TextTile subText='Profit/Loss' mainText={prepareProfitValue(profit, '%')} 
        className={profit === 0 ? '' : profit > 0 ? 'profit-main' : 'loss-main'}/>
      </div>
    </div>
  );
};