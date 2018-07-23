import React from "react";
import { Link, Route, Switch } from 'react-router-dom';
import Welcome from './Welcome';
import UserSignupForm from './UserSignupForm';
import UserSigninForm from './UserSigninForm';
import UserSignoutForm from './UserSignoutForm';
import Activity from './Activity';

const Header = () => {
  if (localStorage.accessToken) {
    return (
      <header>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/activities'>Activities</Link></li>
            <li><Link to='/usersignout'>Sign Out</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path='/usersignup' component={UserSignupForm}/>
          <Route path='/usersignin' component={UserSigninForm}/>
          <Route path='/usersignout' component={UserSignoutForm}/>
          <Route path='/activities' component={Activity}/>
        </Switch>

      </header>
    )
  }
  else {
    return (
      <header>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/usersignup'>Signup</Link></li>
            <li><Link to='/usersignin'>Signin</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path='/usersignup' component={UserSignupForm}/>
          <Route path='/usersignin' component={UserSigninForm}/>
          <Route path='/usersignout' component={UserSignoutForm}/>
          <Route path='/activities' component={Activity}/>
        </Switch>

      </header>
    )
  }
}

export default Header;
