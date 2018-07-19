import React from 'react';
import { inject, observer } from 'mobx-react';
import axios from "axios";

// @inject(['activities'])
// @observer
class Activity extends React.Component {
  state = {
    activities: []
  };
  // removeActivity = (e) => {
  //   e.preventDefault();
  //   this.props.activities.remove(this.props.id);
  // }

  componentDidMount() {
    axios({ method: 'get',
            url: 'http://localhost:3001/v1/activities',
            headers: { 'X-User-Email': 'anything@gmail.com', 'X-User-Token': localStorage.accessToken }
          }).then(res => {
      // if(res.status === 200)
      console.log(res.data)
        this.setState({ activities: res.data });
    })
  }

  render() {
    if (this.state.activities.length === 0) {
      return (
        <div>
          <button>Create An Activity</button>
        </div>
      )
    } else {

      return (
        <div className=''>
          <h1> Activity Title</h1>
          <h3>
            {this.state.activities.map((activity, index)=> {
              return (
                <div key={index}>
                  <p>{activity.title}</p>
                </div>
              )
            })}
          </h3>
        </div>
      );
    }
  }
}

export default Activity;
