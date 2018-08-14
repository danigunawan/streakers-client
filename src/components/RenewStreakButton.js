import React, { Component } from 'react';
import axios from 'axios';
import { Form, Button } from 'reactstrap';

class RenewStreakButton extends Component {

  handleClick = event => {
    const activityId = this.props.streak.activity_id
    const streakId = this.props.streak.id

    axios({
      method: 'PUT',
      url: `http://localhost:3001/v1/activities/${activityId}/streaks/${streakId}`,
      data: {
        streak: this.props.streak
      },
      headers: {
        'X-User-Email': localStorage.email,
        'X-User-Token': localStorage.accessToken
      }
    })
    .then(res => {
      if (res && res.data) {
      console.log(res.data);
        // this.props.updateStreak(res.data)
      }
    })
    .catch(err => {
        console.log(err);
    })
  }

  render () {
    return(
      <Form className="Form">
        <div className="Button">
          <Button className="submitButton" type="button" onClick={this.handleClick}>Renew Streak</Button>
        </div>
      </Form>
    )
  }

}

export default RenewStreakButton;
