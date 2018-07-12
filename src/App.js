import React, { Component } from 'react';
import UserSignupForm from "./components/UserSignupForm";
import Welcome from "./components/Welcome";

import './Layout.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserSignupForm/>
        <Welcome/>
      </div>
    );
  }
}

export default App;
