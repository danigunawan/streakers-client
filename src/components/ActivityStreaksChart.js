import React, { Component } from "react";
import { Doughnut } from 'react-chartjs-2';
import randomColor from 'randomcolor';


export default class ActivityStreaksChart extends Component {
  state = {
    chartData:{
      labels: ['Practice Kung Fu'],
      datasets:[{
        data: [1],
        backgroundColor: [randomColor({ hue: 'random' })]
      }]
    }
  };
  render() {
    return (
      <div className="chart">
        <Doughnut
          className="doughnut"
          data={this.state.chartData}
          options={{
            maintainAspectRatio: false,
            cutoutPercentage: 30,
            legend: {
              display: false
            }
          }}
        />
      </div>
    )
    console.log(this.props.activities, "from ActivityStreaksChart Component");
  }
}
