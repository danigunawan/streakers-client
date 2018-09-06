import React, { Component } from 'react'
import Activities from '../requests/activities';

class ActivityForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.activity.title
    }
    // console.log(this.props.activity.title, "inside ActivityForm")
  }

  handleInput = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  handleBlur = () => {
    // we set a constant called 'newTitle' to the newly updated state of title
    // then we pass this const to the data of the axios call to send to API
    const newTitle = {
      title: this.state.title
    }
    // console.log("blur happened")
    // this👇 is our edit activity request
    Activities.edit(this.props.activity.id, newTitle).then(response => {
      // console.log("response from ActivityForm handleBlur", response.data)
      // this is where we run the updateActivity method + pass the response object ACTIVITY as the arguement
      this.props.updateActivity(response.data)
    })
    .catch(error => console.log(error))
  }


  render() {

    let lastStreak = this.props.activity.streaks[this.props.activity.streaks.length-1]

    return (
      <div className="activity-tile">
        <form onBlur={this.handleBlur} onSubmit={this.handleSubmit}>
          <input className='edit-title-input' type="text" name="title" value={this.state.title} onChange={this.handleInput} ref={this.props.titleRef} />
        </form>

        <h2>Current Streak:</h2>
        <h3>
          { this.props.activity.streaks.length === 0 ? "no streak" : lastStreak.current_streak }
        </h3>
        <h2>Streak Status:</h2>
        <h3>
          { this.props.activity.streaks.length === 0 ? "no streak" : lastStreak.status }
        </h3>
      </div>
    );
  }

}

export default ActivityForm;
