import React, { Component } from 'react';
import axios from 'axios';

class StreaksContainer extends Component {
  state = {
    activities: []
  };

  componentDidMount() {
    axios({ method: 'GET',
            url: 'http://localhost:3001/v1/activities',
            headers: {
              'X-User-Email': localStorage.email,
              'X-User-Token': localStorage.accessToken
            }
          })
    .then(activitiesRes => {
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
      <div>
        
      </div>
    )
  }
}

export default StreaksContainer;
