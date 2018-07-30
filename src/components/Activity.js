import React, { Component } from 'react';

class Activity extends Component {

  handleClick = () => {
    // here is where the onClick prop gets instantiated which calls the enableEditing method and passes up the activiy.id as the arguement
    this.props.onClick(this.props.activity.id)
  }

  // function handleDelete () {........}
  handleDelete = () => {
    // we are calling another function onDelete that is passed in from ActivitiesContainer as a prop and giving that method the activity.id
    this.props.onDelete(this.props.activity.id)
  }

  render () {
    // https://stackoverflow.com/questions/45857698/loop-through-simple-array-of-objects-in-react

    const currentStreak = this.props.streaks.map((streak) => {
      if(this.props.activity.id === streak.activity_id) {
        // console.log(streak.current_streak)
        return streak.current_streak
      }
    })

    return(
      <div className="tile">

        <span className="deleteButton" onClick={this.handleDelete}>
          x
        </span>
        <h4 onClick={this.handleClick}>
          {this.props.activity.title}

        </h4>
        <h2>Current Streak:</h2>
          <h3>
            {currentStreak}
          </h3>

      </div>
    )
  }
}

export default Activity;
