import React from 'react';
import { Line } from 'react-chartjs-2';
import moment from 'moment';


export class LineChart extends React.Component {
  static defaultProps = {
    height: 300
  }

  customTicks(value) {
    switch (value >= 1000) {
      case true:
        return '$ ' + (Math.round(value / 100) / 10) + 'k';
      case false:
        return '$ ' + value;  
      default:
        return value;
    }
  }

  render () {
    const { height, datasets } = this.props;
    const legend = {
      display: false,
    };
    const data = {
      datasets
    };

    const options = {
      animation: {
        duration: 0
      },
      maintainAspectRatio: false,
      scales: {
        xAxes: [{
          id: 'time-axis',
          gridLines: {
            display: false,
          },
          time: {
            displayFormats: {
              hour: 'HH:00',
            },
          },
          type: 'time',
          ticks: {
            autoSkip: true,
          }
        }],
        yAxes: [{
          id: 'price-axis',
          gridLines: {
            color: "rgba(255, 255, 255, 0.1)",
            drawBorder: false,

          },
          ticks: {
            callback: this.customTicks,
            fontColor: '#fff',
            mirror: true,
            maxTicksLimit: 10
          }
        }]
      },
    };

    return (
      <div className='chart-container'>
        <Line data={data} height={height} legend={legend} options={options}/>
      </div>
    );
  }
}