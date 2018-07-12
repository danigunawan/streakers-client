import React, { Component } from "react";
import { Doughnut } from 'react-chartjs-2';
import randomColor from 'randomcolor';

export default class Welcome extends Component {
  constructor(props){
    super(props);
    this.state = {
      chartData:{
        datasets:[{
          data: [1],
          backgroundColor: [randomColor({ hue: 'random' })]
        }]
      }
    }
  }
  render() {
    return (
      <div>
        <h1> Welcome to Streakers </h1>
        <h4> Please login or register to get started 🌀 </h4>
        <div className="chart">
          <Doughnut
            data={this.state.chartData}
            options={{
                maintainAspectRatio: false,
                cutoutPercentage: 30
              }}
          />
        </div>
      </div>
    )
  }
}
