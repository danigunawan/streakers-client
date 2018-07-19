import React from 'react';
import { inject, observer } from 'mobx-react';

import { Link } from 'react-router-dom';

@inject(['activities'])
@observer class Activity extends React.Component {
  removeActivity = (e) => {
    e.preventDefault();
    this.props.activities.remove(this.props.id);
  }
  render() {
    return (
      <div className=''>
        <h1> Activity Title</h1>
          <h3>
            {this.props.activities.all.map((activity, index)=> {
              return (
                <div key={index}>
                  <p>{activity.title}</p>
                </div>
              )
            })}
          </h3>
        <h1> Activity ID </h1>
        <p>{this.props.activities.all[0].user_id}</p>
      </div>
    );
  }
}

export default Activity;
