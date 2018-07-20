import React, { Component } from "react";
import { Form, Input, Label, Button } from "reactstrap";
import axios from "axios";

export default class UserSignupForm extends Component {
  state = {
      name: "",
      email: "",
      password: ""
  };

  handleChange = event => {
    const newUser = {};
    newUser[event.target.name] = event.target.value;
    this.setState(newUser);
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/v1/users", { user: this.state })
      .then(function(res) {
        console.log(res);
        if (!res.data.errmsg) {
          localStorage.setItem('accessToken', res.data.user.authentication_token)
          localStorage.setItem('email', res.data.user.email)
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
    return (
      <Form className="UserForm" onSubmit={this.handleSubmit}>
        <Label>Name</Label>
        <Input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.state.name}
        />
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
        <Button type="submit">Sign Up</Button>
      </Form>
    );
  }
}
