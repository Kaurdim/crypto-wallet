import React from 'react';
import { BigTail } from '../../common/BigTail';


export const CoinsList = ({ coins }) => {
  console.log(coins);
  return (
    <div className='coins-list'>
      {coins.map(coin => (
        <BigTail coin={coin} key={coin.name}/>
      ))}
    </div>
  )
}