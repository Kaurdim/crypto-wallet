import React from 'react';
import { TextTile } from './TextTile';
import '../../styles/BigTail.scss';
import { calculateProfit } from '../../utils';

export const BigTail = ({ coin }) => {
  const { name, amount, price, currentPrice, textName } = coin;

  const profit = calculateProfit(amount, price, currentPrice);
  return (
    <div className='big-tail'>
      <div className='coin-info tail-row'>
        <TextTile mainText={coin.name} align='left' subText={coin.textName} icon={name}/> 
        <TextTile mainText={coin.amount} subText={'$' + (coin.amount * coin.currentPrice).toFixed(2)} />
      </div>
      <div className='coin-price tail-row'>
        <TextTile mainText={coin.currentPrice} subText='Price' align='left'/>
        <TextTile subText='Profit/Loss' mainText={profit + ' %'} 
        className={profit === 0 ? '' : profit > 0 ? 'profit' : 'loss'}/>
      </div>
    </div>
  )
}