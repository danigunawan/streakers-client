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
            {this.props.activities.all[0].title}
          </h3>
        <p>{this.props.activities.all[0].user_id}</p>
      </div>
    );
  }
}

export default Activity;
