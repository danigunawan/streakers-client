import React, { Component } from "react";
import { Doughnut } from 'react-chartjs-2';
import randomColor from 'randomcolor';

export default class StreaksChart extends Component {

  render() {

    let titlesArray = []

    let streakActivityIds = []

    let titles = this.props.activities.map((activity) => {
      if ( activity.streaks.length === 0 ) {
      }
      else {
        activity.streaks.map((streak) => {
          streakActivityIds.push(streak.activity_id)
        })
      }
      // further reading on for...of loop in javascript https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
      for (let id of streakActivityIds) {
        if (id === activity.id) {
          titlesArray.push(activity.title)
        }
      }
    })

    console.log("FROM TITLES ARRAY ==>", titlesArray);

    let streaksArray = [];
    // console.log("current_streak data array", streaksArray);

    let currentStreaks = this.props.activities.map((activity) => {
      if ( activity.streaks.length === 0 ) {
        streaksArray.push(0)
      }
      else {
        activity.streaks.map((streak) => {
          streaksArray.push(streak.current_streak)
        })
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
      labels: titlesArray,
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
          <h1> Your Streaks: </h1>
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
