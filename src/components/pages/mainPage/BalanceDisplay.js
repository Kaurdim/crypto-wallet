import React from 'react';


export const BalanceDisplay = () => {
  return (
    <div className='balance-display'>
      <span className='sub-text'>Your total balance</span>
      <span className='balance'>
        <span className='currency'>$</span>1632.95</span>
      <span className='period'>24h Changes</span>
      <span className='daily-profit profit'>+ $37,55</span>
    </div>
  )
}