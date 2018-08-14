import React, { Component } from 'react';
import { Button } from 'reactstrap';

class RenewStreakButton extends Component {

render () {
  return(
    <div className="Button">
      <Button className="submitButton" type="submit">Renew Streak</Button>
    </div>
  )
}

}

export default RenewStreakButton;
