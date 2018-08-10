import React, { Component } from 'react';
import { Form, Input, Button } from 'reactstrap';

class NewStreakButton extends Component {

render () {
  return(
    <div className="Button">
      <Button className="submitButton" type="submit">Start New Streak</Button>
    </div>
  )
}

}

export default NewStreakButton;
