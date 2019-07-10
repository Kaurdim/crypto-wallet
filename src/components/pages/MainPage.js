import React, { Component } from 'react';
import '../../styles/MainPage.scss';
import '../../styles/common.scss';
import { BigTail } from '../common/BigTail';

export class MainPage extends Component {

  render() {
    return (
      <div className='main-page'>
        <div className='balance-display'>
          <span className='sub-text'>Your total balance</span>
          <span className='balance'>
            <span className='currency'>$</span>1632.95</span>
          <span className='period'>24h Changes</span>
          <span className='daily-profit profit'>+ $37,55</span>
        </div>
        <div className='coint-list'>
          <BigTail/>
        </div>
      </div>
    )
  }
}