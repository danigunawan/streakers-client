import React, { Component } from 'react';
import Activities from '../requests/activities';
import Loadmang from '../helpers/Loadmang';
const StreaksChart = Loadmang(() => import('./StreaksChart'));

class StreaksContainer extends Component {
  state = {
    activities: []
  };

  componentDidMount() {
    Activities.all().then(activitiesRes => {
      if (activitiesRes.status === 200) {
        this.setState({ activities: activitiesRes.data })
      } else {
        alert("could not fetch activities")
      };
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="Activities">
        <StreaksChart
          activities={this.state.activities}
        />
      </div>
    )
  }
}

export default StreaksContainer;
