import React from "react";
import { Link, Route, Switch } from 'react-router-dom';
import Welcome from './Welcome';
import UserSignupForm from './UserSignupForm';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/usersignup'>User Signup Form</Link></li>
      </ul>
    </nav>

    <Switch>
      <Route exact path='/' component={Welcome} />
      <Route path='/usersignup' component={UserSignupForm}/>
    </Switch>

  </header>
)

export default Header;
