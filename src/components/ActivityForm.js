import React, { Component } from 'react'
import axios from 'axios';

class ActivityForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.activity.title
    }
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
          }).then(response => {
            console.log(response.data.activity)
            // this is where we run the updateActivity method + pass the response object ACTIVITY as the arguement
            this.props.updateActivity(response.data.activity)
    })
    .catch(error => console.log(error)
    )
  }

  render() {
    return (
      <div className="tile">
        <form onBlur={this.handleBlur}>
          <input className='input' type="text" name="title" value={this.state.title} onChange={this.handleInput} />
        </form>
      </div>
    );
  }

}

export default ActivityForm;
