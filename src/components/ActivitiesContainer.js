import React from 'react';
import axios from 'axios';
import { Form, Input, Button } from 'reactstrap';
import update from 'immutability-helper';
import Activity from './Activity';
import ActivityForm from './ActivityForm';

class ActivitiesContainer extends React.Component {
// ------------> STATE:
  state = {
    inputTitle: "",
    activities: [],
    editingActivityId: null
  };

// -------------> METHODS:
  // lifecycle function => fetches our ACTIVITIES from API via AXIOS
  componentDidMount() {
    axios({ method: 'GET',
            url: 'http://localhost:3001/v1/activities',
            headers: {
              'X-User-Email': localStorage.email,
              'X-User-Token': localStorage.accessToken
            }
          })
    .then(activitiesRes => {
      if (activitiesRes.status === 200) {
        // console.log("from componentDidMount",activitiesRes.data)
        // 👇 setSTATE of activities[] to response.data array[]
        this.setState({ activities: activitiesRes.data })
      } else {
        alert("could not fetch activities")
      };
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  // this element handles the form change and captures that value
  handleInput = event => {
    let inputValue = event.target.name;
    inputValue = event.target.value;
    this.setState({ inputTitle: inputValue })
  }

  handleSubmit = event => {
    event.preventDefault();
    // this 👇 is the form data (captured above in handleChange) that we are sending to our rails api
    const toSend = this.state.inputTitle;
    // this 👇 clears inputTitle of the input field form
    this.setState({ inputTitle: "" });

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
    console.log('Click happened caught inside Activites Container', id)
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

  deleteActivity = (id) => {
    axios({
      method: 'DELETE',
            url: `http://localhost:3001/v1/activities/${id}`,
            headers: {
              'X-User-Email': localStorage.email,
              'X-User-Token': localStorage.accessToken
            }
    })
    .then(response => {
      const activityIndex = this.state.activities.findIndex(x => x.id === id)
      // use update with the $splice command to create a new array of ideas, and then update state.ideas with that
      const activities = update(this.state.activities, { $splice: [[activityIndex, 1]]})
      this.setState({activities: activities})
    })
    .catch(error => console.log(error))
  }

// STUFF ON PAGE
  render() {
    // IF NO ACTIVITIES ==> INPUT FORM
    if (this.state.activities.length === 0) {
      return (
        <Form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            name="inputTitle"
            value={this.state.inputTitle}
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
        <div className="activities">
          <h1> Your Activities: </h1>
          <div className="activity-card">

            {this.state.activities.map((activity) => {

              // ACTIVITY FORM
              if(this.state.editingActivityId === activity.id) {
                return(
                  // this renders our ActivityForm and passes a prop updateActivity = that calls this.updateActivity function in the current component
                  // 👇 these are all the PROPS we send to ActivityForm
                  <ActivityForm activity={activity} key={activity.id} updateActivity={this.updateActivity} />
                )
              }
              // ACTIVITY COMPONENT
              else {
                return (
                  // 👇 this renders our Activity component
                  // we are passing a prop down to Activity component called <onCLick> which contains enableEditing method
                      <Activity
                        // 👇 props passed to Activity container
                        activity={activity}
                        key={activity.id}
                        onClick={this.enableEditing}
                        onDelete={this.deleteActivity}
                      />
                )
              }

            })}
            
          </div>

          <Form onSubmit={this.handleSubmit}>
            <Input
              type="text"
              name="inputTitle"
              value={this.state.inputTitle}
              onChange={this.handleInput}
            />
            <div>
              <Button className="newActivityButton" type="submit">Add New Activity</Button>
            </div>
          </Form>

        </div>
      );
    }
  }
}

export default ActivitiesContainer;
