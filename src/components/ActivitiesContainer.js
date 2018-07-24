import React from 'react';
import Activity from './Activity';
// import { inject, observer } from 'mobx-react';
import axios from "axios";
import { Form, Input, Button } from 'reactstrap';

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
              return (
                // 👇 this renders our stateless Activity component
                <Activity activity={activity} key={activity.id} />
              )
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