import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Form, Input, Label, Button } from "reactstrap";
import Session from '../requests/session';


export default class UserSigninForm extends Component {
  state = {
    email: "",
    password: "",
    toActivities: false,
  };

  handleChange = event => {
    const loginUser = {};
    loginUser[event.target.name] = event.target.value;
    this.setState(loginUser);
  };

// requests/session AXIOS POST REQUEST
  handleSubmit = event => {
    event.preventDefault();

    Session.create(this.state).then( res => {
      // console.log(res);
      if (!res.data.errmsg) {
        localStorage.setItem('accessToken', res.data.user.authentication_token)
        localStorage.setItem('email', res.data.user.email)
        alert("Thanks for signing in!!");
        this.setState(() => ({
          toActivities: true
        }))
        // window.location.reload(true);
      } else {
        alert("...Something went wrong, please try that again!");
      }
    })
    .catch(function(error) {
      console.log(error);
    });
  };

  render() {
    if ( this.state.toActivities === true ) {
      return <Redirect to={{ pathname: "/activities" }} />;
    }
    else {
      return (
        <Form className="Form" onSubmit={this.handleSubmit}>
          <Label>
            Email
          </Label>
          <Input
            className="FormInput"
            type="email"
            name="email"
            required
            placeholder="youremail@provider.com"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <Label>
            Password
          </Label>
          <Input
            className="FormInput"
            type="password"
            name="password"
            placeholder="supersecret"
            required
            onChange={this.handleChange}
            value={this.state.password}
          />
          <br />
          <div className="Button">
            <Button className="submitButton" type="submit">Sign In</Button>
          </div>
        </Form>
      )
    }
  }
}
