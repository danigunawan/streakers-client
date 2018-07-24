import React from 'react';

const Activity = ({activity}) =>
  <div className="tile" key={activity.id}>
    <h4> {activity.title} </h4>
  </div>

  export default Activity;
