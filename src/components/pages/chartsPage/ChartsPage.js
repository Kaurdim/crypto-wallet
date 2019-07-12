import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { SmallTile } from '../../common/SmallTile';
import { CryptoChart } from './CryptoChart';
import { WalletsPanel } from './WalletsPanel';
import { IntervalButtons } from './IntervalButtons';
import { getChartDataAction, selectCoin } from '../../../actions/chartsActions';
import { setInterval } from '../../../actions/intervalActions';
import { setCoinsSubstractPrice } from '../../../actions/walletActions'
import '../../../styles/ChartsPage.scss';


export class ChartsPage extends Component {
  componentDidMount() {
    this.initChart();
  }

  initChart = () => {
    const { value } = this.props.interval;
    const { selctedCoin } = this.props.chartData;
    this.props.getChartData(selctedCoin, 'USD', value);
  }

  updateChartWithNewInterval = (interval) => {
    const { selctedCoin } = this.props.chartData;
    const coinsName = this.props.wallet.coins.map(c => c.name);
    this.props.selectInterval(interval)
    this.props.getChartData(selctedCoin, 'USD', interval.value);
    this.props.setSubstractPrice(coinsName, 'USD', interval);
  }

  updateChartWithNewCoin = (coin) => {
    const { value } = this.props.interval;
    this.props.changeSelectedCoin(coin)
    this.props.getChartData(coin, 'USD', value);
  }

  render() {
    const { wallet: { coins }, interval, selectInterval, chartData } = this.props;
    const displayedСoin = coins.find(c => c.name === chartData.selctedCoin) || {};
    return (
      <div className='crypo-charts'>
        <header className='crypo-charts-header'>
          <WalletsPanel
            coins={coins}
            selectedCoin={chartData.selctedCoin}
            heandleClick={this.updateChartWithNewCoin} />
          <SmallTile className='size-l' coin={displayedСoin} />
        </header>
        <IntervalButtons
          selcectedInterval={interval}
          selectInterval={this.updateChartWithNewInterval} />
        <CryptoChart data={this.props.chartData.data} />
      </div>
    );
  }
};

const mapStateToProps = ({ wallet, chartData, interval }) => {
  return {
    wallet,
    chartData,
    interval
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getChartData: (coinName, currency, period) =>
      dispatch(getChartDataAction(coinName, currency, period)),
    selectInterval: (interval) => dispatch(setInterval(interval)),
    changeSelectedCoin: (coin) => dispatch(selectCoin(coin)),
    setSubstractPrice: (coins, currency, interval) =>
      dispatch(setCoinsSubstractPrice(coins, currency, interval))
  };
};

ChartsPage = connect(mapStateToProps, mapDispatchToProps)(ChartsPage);