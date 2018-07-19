import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Form, Input, Label, Button } from "reactstrap";
import axios from "axios";


export default class UserSigninForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = event => {
    const loginUser = {};
    loginUser[event.target.name] = event.target.value;
    this.setState(loginUser);
  };

// AXIOS POST REQUEST
  handleSubmit = event => {
    event.preventDefault();
    const requestUser = { email: this.state.email, password: this.state.password }
    axios
      .post("http://localhost:3001/v1/sessions", requestUser  )
      .then(function(res) {
        console.log(res);
        if (!res.data.errmsg) {
          localStorage.setItem('accessToken', res.data.user.authentication_token)
          alert("Thanks for signing in!!");
          window.location.reload(true);
        } else {
          alert("email already used");
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    if (localStorage.accessToken) {
      return <Redirect to={{ pathname: "/activities" }} />;
    }
    else {
      return (
        <Form className="UserForm" onSubmit={this.handleSubmit}>
          <Label>Email</Label>
          <Input
            type="text"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <br />
          <Button type="submit">Sign In</Button>
        </Form>
      )
    }
  }
}
