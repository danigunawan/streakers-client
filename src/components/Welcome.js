import React, { Component } from "react";
import { Doughnut } from 'react-chartjs-2';
import randomColor from 'randomcolor';
import WelcomeChart from './WelcomeChart'

export default class Welcome extends Component {

  render() {
    return (
      <WelcomeChart />
    )
  }
}
