import React from 'react';
import { inject, observer } from 'mobx-react';
import axios from "axios";
import { Form, Input, Button } from 'reactstrap';

// @inject(['activities'])
// @observer
class Activity extends React.Component {
  state = {
    content: "",
    activities: []
  };
  // removeActivity = (e) => {
  //   e.preventDefault();
  //   this.props.activities.remove(this.props.id);
  // }

  componentDidMount() {
    axios({ method: 'get',
            url: 'http://localhost:3001/v1/activities',
            headers: { 'X-User-Email': localStorage.email, 'X-User-Token': localStorage.accessToken }
          }).then(res => {
      if(res.status === 200)
      console.log(res.data)
        this.setState({ activities: res.data });
    })
  }

  handleChange = event => {
    let inputValue = event.target.name;
    inputValue = event.target.value;
    this.setState({ content: inputValue })
  }

  handleSubmit = event => {
    event.preventDefault();
    const toSend = this.state.content;

    axios({
            method: 'post',
            url: 'http://localhost:3001/v1/activities',
            data: {
              title: toSend
            },
            headers: { 'X-User-Email': localStorage.email, 'X-User-Token': localStorage.accessToken }
          }).then(res => {
        if (res && res.data) {
          console.log(res);
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
            onChange={this.handleChange}
          />
          <div>
            <Button type="submit">Create An Activity</Button>
          </div>
        </Form>
      );
    } else {

      return (
        <div className=''>
          <h1> Activity Title</h1>
          <h3>
            {this.state.activities.map((activity, index) =>
              {
                return (
                  <div key={index}>
                    <p>{activity.title}</p>
                  </div>
                )
              }
            )}
            <Form onSubmit={this.handleSubmit}>
              <Input
                type="text"
                name="content"
                value={this.state.content}
                onChange={this.handleChange}
              />
              <div>
                <Button type="submit">Create An Activity</Button>
              </div>
            </Form>
          </h3>
        </div>
      );
    }
  }
}

export default Activity;
