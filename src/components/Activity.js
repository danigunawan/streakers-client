import React, { Component } from 'react';
import StartStreakButton from './StartStreakButton';
import NewStreakButton from './NewStreakButton';
import RenewStreakButton from './RenewStreakButton';

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

  updateStreak = (data) => {
    // console.log("passed up to Activity.js", data)
    this.props.updateStreakItem(data)
  }

  newStreak = (data) => {
    // console.log("passed up to Activity.js", data)
    this.props.newStreakItem(data)
  }

  render () {
    // if there are NO streaks for activity, DO THIS 👇
    if ( this.props.activity.streaks.length === 0 ) {
      return (
        <div className="activity-tile">
          {/* this👇 passes the onClick event to the handleDelete callback fxn above */}
          <div className='deleteButtonContainer'>
            <span>
              <div className="deleteButton" onClick={this.handleDelete}>
                X
              </div>
            </span>
          </div>
          {/* this👇 passes the onClick event to the handleClick callback fxn above */}
          <div className='activityTitleContainer'>
            <h2 className="activityTitle" onClick={this.handleClick}>
              {this.props.activity.title}
              <span className="activityTitleEditButton"> Edit </span>
            </h2>
          </div>
          <StartStreakButton
            activity={this.props.activity}
            key={this.props.activity.id}
            newStreak={this.newStreak}
          />
        </div>
      );
    }
    // if the status of the LAST streak in the streaks array = "finished", do this 👇
    else if ( this.props.activity.streaks[this.props.activity.streaks.length - 1].status === "finished" ) {
      return (
        <div className="activity-tile">
          {/* this👇 passes the onClick event to the handleDelete callback fxn above */}
          <div className='deleteButtonContainer'>
            <span>
              <div className="deleteButton" onClick={this.handleDelete}>
                X
              </div>
            </span>
          </div>
          {/* this👇 passes the onClick event to the handleClick callback fxn above */}
          <div className='activityTitleContainer'>
            <h2 className="activityTitle" onClick={this.handleClick}>
              {this.props.activity.title}
              <span className="activityTitleEditButton"> Edit </span>
            </h2>
          </div>
          <NewStreakButton
            activity={this.props.activity}
            key={this.props.activity.id}
            newStreak={this.newStreak}
          />
        </div>
      );
    }
    else {
      return (
        <div className="activity-tile">
          {/* this👇 passes the onClick event to the handleDelete callback fxn above */}
          <div className='deleteButtonContainer'>
            <span>
              <div className="deleteButton" onClick={this.handleDelete}>
                X
              </div>
            </span>
          </div>
          {/* this👇 passes the onClick event to the handleClick callback fxn above */}
          <div className='activityTitleContainer'>
            <h2 className="activityTitle" onClick={this.handleClick}>
              {this.props.activity.title}
              <span className="activityTitleEditButton"> Edit </span>
            </h2>
          </div>
          <h2>Current Streak:</h2>
          <h3>
            { this.props.activity.streaks[this.props.activity.streaks.length - 1].current_streak }
          </h3>
          <h2>Streak Status:</h2>
          <h3>
            { this.props.activity.streaks[this.props.activity.streaks.length - 1].status }
          </h3>

          { this.props.activity.streaks.map((streak) => {
            // console.log("from streak map", streak)
            if ( streak.status === "active" && streak.reset === false ) {
              return (
                  <RenewStreakButton
                    streak={streak}
                    key={streak.id}
                    updateStreak={this.updateStreak}
                  />
              )
            }
            else if (streak.status === "active" && streak.reset === true) {
              return (
                <h2> Streak Updated ✔️ </h2>
              )
            }
          })}
        </div>
      )
    }
  }
}

export default Activity;
