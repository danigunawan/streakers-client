import React, { Component } from "react";
import { Doughnut } from 'react-chartjs-2';
import randomColor from 'randomcolor';

export default class ActivityStreaksChart extends Component {

  render() {

    let titles = this.props.activities.map((activity) => {
      return activity.title
    })
    // console.log("from titles", titles);

    let streaksArray = [];
    // console.log("current_streak data array", streaksArray);

    let currentStreaks = this.props.activities.forEach( activity => {
      if ( activity.streaks.length === 0 ) {
        streaksArray.push(0)
      }
      else {
        streaksArray.push(activity.streaks[activity.streaks.length - 1].current_streak)
      }
    })

    let color = randomColor({
      count: streaksArray.length,
      luminosity: 'light',
      // hue: '#ffc9a3',
      format: 'rgba',
      alpha: 0.7
    });

    let chartData = {
      labels: titles,
      datasets:[{
        data: streaksArray,
        backgroundColor: color,
        borderColor: '#5D4954',
        borderWidth: 3.5,
        pointBackgroundColor: '#007bff'
      }]
    }

    let options = {
      maintainAspectRatio: true,
      cutoutPercentage: 20,
      legend: {
        display: false
      }
    }

    if (this.props.activities.length === 0 || this.props.activities[0].streaks.length === 0  ) {
      return (
        <div>
        </div>
      )
    }
    else {
      return (
        <div className="welcome">
          <div className="chart">
            <Doughnut
              className="doughnut"
              data={chartData}
              options={options}
            />
          </div>
        </div>
      )
    }
  }
}
