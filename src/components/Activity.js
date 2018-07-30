import React, { Component } from 'react';

class Activity extends Component {

  handleClick = () => {
    // here is where the onClick prop gets instantiated which calls the enableEditing method and passes up the activiy.id as the arguement
    this.props.onClick(this.props.activity.id)
  }

  handleDelete = () => {
    // we are calling another function onDelete that is passed in from ActivitiesContainer as a prop and giving that method the activity.id
    this.props.onDelete(this.props.activity.id)
  }

  render () {
    // https://stackoverflow.com/questions/45857698/loop-through-simple-array-of-objects-in-react
    const streakStatus = this.props.streaks.map((streak) =>
        <h5 key={streak.id}>{streak.status}</h5>
    );
    return(
      <div className="tile">

        <span className="deleteButton" onClick={this.handleDelete}>
          x
        </span>
        <h4 onClick={this.handleClick}>
          {this.props.activity.title}
        </h4>

        { streakStatus }
      </div>
    )
  }
}

export default Activity;
