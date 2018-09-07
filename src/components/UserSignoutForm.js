import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Form, Button } from "reactstrap";
import Session from '../requests/session';
// import axios from "axios";

export default class UserSignoutForm extends Component {

  // AXIOS DELETE REQUEST FOR USER SIGN OUT
  handleSubmit = event => {
    event.preventDefault();

    Session.signOut().then(function(res) {
      // console.log(res);
      if (!res.data.errmsg) {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('email')
        window.location.reload(true);
        alert("Signed out");
        // this.props.history.push('/');
      } else {
        alert("Well that was weird! Please try again.");
      }
    })
    .catch(function(error) {
      console.log(error);
    });
  };

  render() {
    if (localStorage.accessToken) {
      return (
        <Form className="Form" onSubmit={this.handleSubmit}>
          <br />
          <div className="Button">
            <Button className="submitButton" type="submit">Sign Out</Button>
          </div>
        </Form>
      )
    }
    else {
      return <Redirect to={{ pathname: "/" }} />;
    }
  }
}
