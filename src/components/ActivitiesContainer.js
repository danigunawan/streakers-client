import React from 'react';
import axios from 'axios';
import { Form, Input, Button } from 'reactstrap';
import update from 'immutability-helper';
import Activity from './Activity';
import ActivityForm from './ActivityForm'
// import { inject, observer } from 'mobx-react';

// @inject(['activities'])
// @observer
class ActivitiesContainer extends React.Component {
  state = {

    content: "",
    activities: [],
    editingActivityId: null

  };
  // removeActivity = (e) => {
  //   e.preventDefault();
  //   this.props.activities.remove(this.props.id);
  // }

  // lifecycle function => fetches our ACTIVITIES from API via AXIOS
  componentDidMount() {
    axios({ method: 'GET',
            url: 'http://localhost:3001/v1/activities',
            headers: {
              'X-User-Email': localStorage.email,
              'X-User-Token': localStorage.accessToken
            }
          }).then(res => {
      if(res.status === 200)
        console.log(res.data)
        // 👇 setSTATE of activities[] to response.data array[]
        this.setState({ activities: res.data })
      ;
    })
  }

  // this element handles the form change and captures that value
  handleInput = event => {
    let inputValue = event.target.name;
    inputValue = event.target.value;
    this.setState({ content: inputValue })
  }

  handleSubmit = event => {
    event.preventDefault();
    // this 👇 is the form data (captured above in handleChange) that we are sending to our rails api
    const toSend = this.state.content;
    // this 👇 clears content of the input field form
    this.setState({ content: "" });

    axios({
            method: 'POST',
            url: 'http://localhost:3001/v1/activities',
            data: {
              title: toSend
            },
            headers: {
              'X-User-Email': localStorage.email,
              'X-User-Token': localStorage.accessToken
            }
          }).then(res => {
        if (res && res.data) {
          // console.log(res.data.activity);
          this.setState(( preState ) =>
            ({ activities: preState.activities.concat([res.data.activity]) })
          );
        }
      })
      .catch(err => {
        console.log(err);
      })
  };

  enableEditing = (id) => {
    this.setState({editingActivityId: id})
  }

  updateActivity = (activity) => {
    // this takes the activity object that comes back from the axios put and contains our .id and .title
    // here we are going through our activities array and finding an index of an object that will be equal to the id of the activity that comes back in the axios PUT response
    // activity.id in this context is (response.data.activity.id)
    const activityIndex = this.state.activities.findIndex(x => x.id === activity.id)

    // here we are creating a copy of the state.activities array and then using the immutability-helper UPDATE method to $set our new activity object that comes back with our new title from the axios PUT method inside ActivityForm to the object found/set inside activityIndex
    const activities = update(this.state.activities, {
      [activityIndex]: { $set: activity }
    })
    // then we setState of the activities from our copy
    this.setState({activities: activities})

  }

  render() {
    if (this.state.activities.length === 0) {
      return (
        <Form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            name="content"
            value={this.state.content}
            onChange={this.handleInput}
          />
          <div>
            <Button type="submit">Create An Activity</Button>
          </div>
        </Form>
      );
    }
    else {
      return (
        <div className=''>
          <h1> Your Activities: </h1>
          <h3>

            {this.state.activities.map((activity) => {
              if(this.state.editingActivityId === activity.id) {
                return(
                  // this renders our ActivityForm and passes a prop updateActivity = that calls this.updateActivity function in the current component
                  // 👇 these are all the PROPS we send to ActivityForm
                  <ActivityForm activity={activity} key={activity.id} updateActivity={this.updateActivity} />
                )
              } else {
                return (
                  // 👇 this renders our Activity component
                  <Activity activity={activity} key={activity.id} onClick={this.enableEditing} />
                )
              }
            })}

            <Form onSubmit={this.handleSubmit}>
              <Input
                type="text"
                name="content"
                value={this.state.content}
                onChange={this.handleInput}
              />
              <div>
                <Button className="newActivityButton" type="submit">Add New Activity</Button>
              </div>
            </Form>

          </h3>
        </div>
      );
    }
  }
}

export default ActivitiesContainer;
