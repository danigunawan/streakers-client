import React from "react";
import { Link, Route, Switch } from 'react-router-dom';
import Welcome from './Welcome';
import UserSignupForm from './UserSignupForm';
import Activity from './Activity';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/usersignup'>Signup</Link></li>
        <li><Link to='/activities'>Activities</Link></li>
      </ul>
    </nav>

    <Switch>
      <Route exact path='/' component={Welcome} />
      <Route path='/usersignup' component={UserSignupForm}/>
      <Route path='/activities' component={Activity}/>
    </Switch>

  </header>
)

export default Header;
