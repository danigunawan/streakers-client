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
    const activity = {
      title: this.state.title
    }
    // this is our edit activity request
    axios({
            method: 'PUT',
            url: `http://localhost:3001/v1/activities/${this.props.activity.id}`,
            data: {
              activity: activity
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
  }

  render() {
    return (
      <div className="activity-tile">
        <form onBlur={this.handleBlur}>
          <input className='edit-title-input' type="text" name="title" value={this.state.title} onChange={this.handleInput} />
        </form>
      </div>
    );
  }

}

export default ActivityForm;
