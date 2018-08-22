import React, { Component } from "react";
import { Redirect } from "react-router-dom";
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
        // console.log(res);
        if (!res.data.errmsg) {
          localStorage.setItem('accessToken', res.data.user.authentication_token)
          localStorage.setItem('email', res.data.user.email)
          alert("Thanks for signing up!!");
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
