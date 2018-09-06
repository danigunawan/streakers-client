import React, { Component } from 'react';
import Streaks from '../requests/streaks';
import { Form, Button } from 'reactstrap';

class RenewStreakButton extends Component {

  handleClick = event => {
    const activityId = this.props.streak.activity_id
    const streakId = this.props.streak.id
    const streak = this.props.streak


    Streaks.renew(activityId, streakId, streak).then(res => {
      if (res && res.data) {
      // console.log("response from AXIOS PUT request", res.data);
        this.props.updateStreak(res.data)
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
