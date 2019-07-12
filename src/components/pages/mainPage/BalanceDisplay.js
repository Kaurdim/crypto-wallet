import React from 'react';

import '../../../styles/BalanceDisplay.scss';
import { Icon } from '../../common/Icon';
import error from '../../../assets/error.svg'


export const BalanceDisplay = ({ timeChange, walletCurrentSum, walletProfit = 0, requestError }) => {
  const profit = () => {
    const prepareValue = Math.abs(walletProfit).toFixed(2);
    switch (walletProfit > 0) {
      case true:
        return `+ $${prepareValue} ↑`;  
      case false:
        return `- $${prepareValue} ↓`; 
      default:
        return prepareValue;
    }
  };
  
  return (
    <div className='balance-display'>
      <h1 className='display-caption sub-text'>Your total balance</h1>
      <span className='balance'>
        <span className='currency'>$ </span>
        {walletCurrentSum.toFixed(2)}
        {requestError && <Icon path={error}/>}
      </span>
      <span className='period'>{timeChange}</span>
      <span 
        className={'wallet-profit ' +
          (walletProfit === 0 ? '' : walletProfit > 0 ? 'profit' : 'loss') }>
        {profit()}  
      </span>
    </div>
  );
};