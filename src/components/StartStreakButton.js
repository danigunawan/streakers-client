import React, { Component } from 'react';
import Streaks from '../requests/streaks';
import { Button } from 'reactstrap';

class StartStreakButton extends Component {

  handleClick = event => {

    const activityId = this.props.activity.id;

    Streaks.new(activityId).then(res => {
      if (res && res.data) {
      console.log("response from AXIOS POST request", res.data);
        this.props.newStreak(res.data)
      }
    })
    .catch(err => {
        console.log(err);
    })
  }

  render () {
    return (
      <div className="Button">
        <Button className="submitButton" type="submit" onClick={this.handleClick}> Start Streakin! </Button>
      </div>
    )
  }
}

export default StartStreakButton;
