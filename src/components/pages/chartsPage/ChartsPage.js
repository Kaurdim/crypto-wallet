import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SmallTile } from '../../common/SmallTile';
import { CryptoChart } from './CryptoChart';
import { CoinsPanel } from './CoinsPanel';
import { connect } from 'react-redux';
import '../../../styles/CryptoCharts.scss';


export class ChartsPage extends Component {

  render () {
    const { wallet: { coins } } = this.props;
    return (
      <div className='crypo-charts'>
        <header className='crypo-charts-header'>
          <Link to='/'>{'<'}</Link>
          <CoinsPanel coins={coins}/>
          <SmallTile className='size-l' coin={this.props.wallet.coins[0]}/>
        </header>
        <CryptoChart/>
      </div>
    )
  }
}

const mapStateToProps = ({ wallet }) => {
  return {
    wallet
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCoinsPrice: (coins, currency) => dispatch(getCoinsCurrentPrice(coins, currency))
  };
};

ChartsPage = connect(mapStateToProps, mapDispatchToProps)(ChartsPage);