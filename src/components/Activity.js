import React, { Component } from 'react';

class Activity extends Component {

  handleClick = () => {
    // console.log("clicked from Activity.js", this.props.activity.id)
    // here is where the onClick prop gets instantiated which calls the enableEditing method and passes up the activiy.id as the arguement
    this.props.onClick(this.props.activity.id)
  }

  // function handleDelete () {........}
  handleDelete = () => {
    // we are calling a prop function onDelete that is passed in from ActivitiesContainer as a prop and giving that method the activity.id
    this.props.onDelete(this.props.activity.id)
  }

  render () {


    return(
      <div className="activity-tile">
        {/* this👇 passes the onClick event to the handleDelete callback fxn above */}
        <span className="deleteButton" onClick={this.handleDelete}>
          X
        </span>
        {/* this👇 passes the onClick event to the handleClick callback fxn above */}
        <h2 onClick={this.handleClick}>
          {this.props.activity.title}
        </h2>
        <h2>Current Streak:</h2>
        <h3>
          { this.props.activity.streaks.length === 0 ? "no streak" : this.props.activity.streaks[0].current_streak }
        </h3>
        <h2>Streak Status:</h2>
        <h3>
          { this.props.activity.streaks.length === 0 ? "no streak" : this.props.activity.streaks[0].status }
        </h3>
      </div>
    )
  }
}

export default Activity;
