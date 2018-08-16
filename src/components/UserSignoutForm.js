import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Form, Button } from "reactstrap";
import axios from "axios";


export default class UserSignoutForm extends Component {

  // AXIOS DELETE REQUEST
  handleSubmit = event => {
    event.preventDefault();
    axios({
      method: 'DELETE',
      url: 'http://localhost:3001/v1/sessions',
      headers: {
        'X-User-Email': localStorage.email,
        'X-User-Token': localStorage.accessToken
      }
    })
    .then(function(res) {
      console.log(res);
      if (!res.data.errmsg) {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('email')
        alert("Signed out");
        window.location.reload(true);
      } else {
        alert("Could not sign out");
      }
    })
    .catch(function(error) {
      console.log(error);
    });
  };

  render() {
    if (localStorage.accessToken) {
      return (
        <Form className="UserForm" onSubmit={this.handleSubmit}>
          <br />
          <Button type="submit">Sign Out</Button>
        </Form>
      )
    }
    else {
      return <Redirect to={{ pathname: "/" }} />;
    }
  }
}
