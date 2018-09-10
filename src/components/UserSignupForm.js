import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Form, Input, Label, Button } from "reactstrap";
import Session from '../requests/session';

export default class UserSignupForm extends Component {
  state = {
      name: "",
      email: "",
      password: "",
      toActivities: false,
  };

  handleChange = event => {
    const newUser = {};
    newUser[event.target.name] = event.target.value;
    this.setState(newUser);
  };

  handleSubmit = event => {
    event.preventDefault();
    // requests/session AXIOS POST REQUEST
      Session.newUser(this.state).then( res => {
        // console.log(res);
        if (!res.data.errmsg) {
          localStorage.setItem('accessToken', res.data.user.authentication_token)
          localStorage.setItem('email', res.data.user.email)
          this.setState(() => ({
            toActivities: true
          }))
          alert("Thanks for signing up!!");
        } else {
          alert("email already used");
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    if ( localStorage.accessToken && this.state.toActivities === true ) {
      return <Redirect to={{ pathname: "/activities" }} />;
    }
    else {
      return (
        <Form className="Form" onSubmit={this.handleSubmit}>
          <Label>
            Name
          </Label>
          <Input
            className="FormInput"
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <Label>
            Email
          </Label>
          <Input
            className="FormInput"
            type="text"
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
            <Button className="submitButton" type="submit">Sign Up</Button>
          </div>
        </Form>
      );
    }
  }
}
