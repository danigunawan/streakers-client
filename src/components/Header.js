import React from "react";
import { Link, Route, Switch } from 'react-router-dom';
import Loadmang from '../helpers/Loadmang';
import UserSignupForm from './UserSignupForm';
import UserSigninForm from './UserSigninForm';
import UserSignoutForm from './UserSignoutForm';
// LOADABLE.JS COMPONENT IMPORTS 👇
const Welcome = Loadmang(() => import('./Welcome'));
const ActivitiesContainer = Loadmang(() => import('./ActivitiesContainer'));

const Header = () => {
  if (localStorage.accessToken) {
    return (
      <header>
        <nav>
          <div className="nav">
            <span className="navlink"><Link to='/' activeClassName="active">Home</Link></span>
            <span className="navlink"><Link to='/activities' activeClassName="active">Activities</Link></span>
            <span className="navlink"><Link to='/usersignout'>Sign Out</Link></span>
          </div>
        </nav>

        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path='/usersignup' component={UserSignupForm}/>
          <Route path='/usersignin' component={UserSigninForm}/>
          <Route path='/usersignout' component={UserSignoutForm}/>
          <Route path='/activities' component={ActivitiesContainer}/>
        </Switch>

      </header>
    )
  }
  else {
    return (
      <header>
        <nav>
          <div className="nav">
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/usersignup'>Signup</Link></li>
              <li><Link to='/usersignin'>Signin</Link></li>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path='/usersignup' component={UserSignupForm}/>
          <Route path='/usersignin' component={UserSigninForm}/>
          <Route path='/usersignout' component={UserSignoutForm}/>
          <Route path='/activities' component={ActivitiesContainer}/>
        </Switch>

      </header>
    )
  }
}

export default Header;
