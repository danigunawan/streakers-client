import React, { Component } from "react";
import { Doughnut } from 'react-chartjs-2';
import randomColor from 'randomcolor';

export default class WelcomeChart extends Component {

  render() {


    let color = randomColor({
      count: 1,
      luminosity: 'light',
      format: 'rgba',
      alpha: 0.7
    });

    let dummyChartData = {
      labels: ['Practice Kung Fu'],
      datasets:[{
        data: [1],
        backgroundColor: color
      }]
    }

    // let chartData = {
    //   labels: titles,
    //   datasets:[{
    //     data: streaksArray,
    //     backgroundColor: color
    //   }]
    // }

    let options = {
      maintainAspectRatio: true,
      cutoutPercentage: 30,
      legend: {
        display: false
      }
    }

    if (localStorage.accessToken) {
      return (
        <div className="welcome">
          <h1> Welcome back! </h1>
          <div className="chart">
            <Doughnut
              className="doughnut"
              data={dummyChartData}
              options={options}
            />
          </div>
        </div>
      )
    }
    else {
      return (
        <div className="welcome">
          <h1> Welcome to Streakrs </h1>
          <h4> Please login or register to get started 🌀 </h4>
          <div className="chart">
            <Doughnut
              className="doughnut"
              data={dummyChartData}
              options={options}
            />
          </div>
        </div>
      )
    }
  }
}
