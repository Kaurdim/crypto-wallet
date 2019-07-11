import React from 'react';
import { Line } from 'react-chartjs-2';
import moment from 'moment';


export const colors = ['#f00', '#3e9651', '#00f', '#f0f', '#da7c30', '#000'];

export class LineChart extends React.Component {
  static defaultProps = {
    height: 300
  }

  // handleRangeChange = ({ chart }) => {
  //   let { min, max } = chart.options.scales.xAxes[0].time;
  //   if (!isNaN(min)) min = moment.unix(min / 1000);
  //   else min = moment(min._d);
  //   if (!isNaN(max)) max = moment.unix(max / 1000);
  //   else max = moment(max._d);

  //   const newInterval = [min, max];
  //   if (this.props.onChangeInterval) {
  //     this.props.onChangeInterval(newInterval);
  //   }
  // }

  // filtredByIntervalDatasets () {
  //   return this.props.datasets.map(dataset => {
  //     let lastPointBefore = null;
  //     let firstPointAfter = null;
  //     let data = dataset.data.filter(p => {
  //       if (p.t.isBefore(this.props.interval[0])) {
  //         lastPointBefore = p;
  //       }
  //       if (!firstPointAfter && p.t.isAfter(this.props.interval[1])) {
  //         firstPointAfter = p;
  //       }
  //       return p.t.isBetween(...this.props.interval);
  //     });
  //     if (data.length) {
  //       if (lastPointBefore) {
  //         data.unshift(lastPointBefore);
  //       }
  //       if (firstPointAfter) {
  //         firstPointAfter.y = data[data.length - 1].y;
  //         data.push(firstPointAfter);
  //       }
  //     }
  //     return {...dataset, data }
  //   });
  // }

  render () {
    const { height } = this.props;
    // const data = { datasets: this.filtredByIntervalDatasets(datasets) };
    const legend = {
      display: false,
    };
    const data = {
      labels: ['Item 1', 'Item 2', 'Item 3'],
      datasets: [{
          data: [10, 20, 30],
      }]
  }

    // const options = {
    //   animation: {
    //     duration: 0
    //   },
    //   maintainAspectRatio: false,
    //   plugins: {
    //     zoom: {
    //       pan: {
    //         enabled: true,
    //         mode: 'x',
    //         onPan: this.handleRangeChange
    //       },
    //       zoom: {
    //         drag: false,
    //         enabled: true,
    //         mode: 'x',
    //         onZoom: this.handleRangeChange,
    //         speed: 0.16
    //       }
    //     }
    //   },
    //   scales: {
    //     xAxes: [{
    //       id: 'time-axis',
    //       time: {
    //         displayFormats: {
    //           hour: 'HH:00',
    //           minute: 'HH:mm',
    //           second: 'HH:mm:ss',
    //           millisecond: 'HH:mm:ss.SSS'
    //         },
    //         min: interval[0],
    //         max: interval[1]
    //       },
    //       ticks: {
    //         autoSkipPadding: 300
    //       },
    //       type: 'time'
    //     }]
    //   },
    // };

    return (
      <div className='chart-container'>
        <Line data={data} height={300} legend={legend}/>
      </div>
    );
  }
}