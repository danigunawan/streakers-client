import React, { Component } from 'react';
import UserSignupForm from "./components/UserSignupForm";

import './Layout.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserSignupForm/>
      </div>
    );
  }
}

export default App;
