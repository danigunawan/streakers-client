import React, { Component } from 'react'
import axios from 'axios';

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

  handleBlur = () => {
    // we set a constant called 'newTitle' to the newly updated state of title
    // then we pass this const to the data of the axios call to send to API
    const newTitle = {
      title: this.state.title
    }
    console.log("blur happened")
    // this is our edit activity request
    axios({
            method: 'PUT',
            url: `http://localhost:3001/v1/activities/${this.props.activity.id}`,
            data: {
              activity: newTitle
            },
            headers: {
              'X-User-Email': localStorage.email,
              'X-User-Token': localStorage.accessToken
            }
          })
    .then(response => {
      // console.log("response from ActivityForm handleBlur", response.data)
      // this is where we run the updateActivity method + pass the response object ACTIVITY as the arguement
      this.props.updateActivity(response.data)
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="activity-tile">
        <form onBlur={this.handleBlur}>
          <input className='edit-title-input' type="text" name="title" value={this.state.title} onChange={this.handleInput} ref={this.props.titleRef} />
        </form>

        <h2>Current Streak:</h2>
        <h3>
          { this.props.activity.streaks.length === 0 ? "no streak" : this.props.activity.streaks[0].current_streak }
        </h3>
        <h2>Streak Status:</h2>
        <h3>
          { this.props.activity.streaks.length === 0 ? "no streak" : this.props.activity.streaks[0].status }
        </h3>
      </div>
    );
  }

}

export default ActivityForm;
