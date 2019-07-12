import React from 'react';
import { LineChart } from '../../common/LineChart';
const borderColor = 'rgb(161, 113, 255)';
const backgroundColor = 'rgba(161, 113, 255, 0.1)'

export const CryptoChart = ({ data }) => {
  const LineDataset = [{
    borderColor,
    backgroundColor,
    borderWidth: 1,
    data,
    label: false,
    pointRadius: 0,
    xAxisID: 'time-axis',
    yAxisID: 'price-axis',
    lineTension: 0
  }];


  return (
    <div className='crypto-chart'>
      <LineChart datasets={LineDataset} />
    </div>
  )
}