import React from 'react';
import { BigTail } from '../../common/BigTail';
import { Link } from 'react-router-dom';

export const CoinsList = ({ coins }) => {
  console.log(coins);
  return (
    <div className='coins-list'>
      {coins.map(coin => (
        <Link to='/crypto-chart'  key={coin.name} style={{width: '100%'}}>
          <BigTail coin={coin}/>
        </Link>
      ))}
    </div>
  )
}