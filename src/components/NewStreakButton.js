import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';

class NewStreakButton extends Component {

  handleClick = event => {
    const activityId = this.props.streak.activity_id

    axios({
      method: 'POST',
      url: `http://localhost:3001/v1/activities/${activityId}/streaks/`,
      data: {
      },
      headers: {
        'X-User-Email': localStorage.email,
        'X-User-Token': localStorage.accessToken
      }
    })
    .then(res => {
      if (res && res.data) {
      console.log("response from AXIOS PUT request", res.data);
        // this.props.newStreak(res.data)
      }
    })
    .catch(err => {
        console.log(err);
    })
  }

  render () {
    return (
      <div className="Button">
        <Button className="submitButton" type="submit" onClick={this.handleClick}>Start New Streak</Button>
      </div>
    )
  }
}

export default NewStreakButton;
