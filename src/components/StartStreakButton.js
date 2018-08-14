import React, { Component } from 'react';
import { Button } from 'reactstrap';

class StartStreakButton extends Component {
  render () {
    return (
      <div className="Button">
        <Button className="submitButton" type="submit">Start Streakin </Button>
      </div>
    )
  }
}

export default StartStreakButton;
