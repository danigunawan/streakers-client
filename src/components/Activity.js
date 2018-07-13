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
        <h2>
          <Link to={`/activities/${this.props.id}`}>
            {this.props.title}
          </Link>
        </h2>
        <p>{this.props.user_id}</p>
        <a href='#'
           className=''
           onClick={this.removeActivity}>
           Remove
        </a>
      </div>
    );
  }
}

export default Activity;
