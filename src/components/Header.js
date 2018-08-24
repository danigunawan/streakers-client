import React from 'react';
import { Link, Route, Switch, NavLink } from 'react-router-dom';
import Loadmang from '../helpers/Loadmang';
import UserSignupForm from './UserSignupForm';
import UserSigninForm from './UserSigninForm';
import UserSignoutForm from './UserSignoutForm';
// LOADABLE.JS COMPONENT IMPORTS 👇
const Welcome = Loadmang(() => import('./Welcome'));
const ActivitiesContainer = Loadmang(() => import('./ActivitiesContainer'));
const StreaksContainer = Loadmang(() => import('./StreaksContainer'));

const Header = () => {
  if (localStorage.accessToken) {
    return (
      <header>
        <nav>
          <div className="nav">
            <span className="navlink"><NavLink exact={true} to='/'>Home</NavLink></span>
            <span className="navlink"><NavLink to='/activities'>Activities</NavLink></span>
            <span className="navlink"><NavLink to='/streaks'>Streaks</NavLink></span>
            <span className="navlink"><NavLink to='/usersignout'>Sign Out</NavLink></span>
          </div>
        </nav>

        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path='/usersignup' component={UserSignupForm}/>
          <Route path='/usersignin' component={UserSigninForm}/>
          <Route path='/usersignout' component={UserSignoutForm}/>
          <Route path='/activities' component={ActivitiesContainer}/>
          <Route path='/streaks' component={StreaksContainer}/>
        </Switch>

      </header>
    )
  }
  else {
    return (
      <header>
        <nav>
          <div className="nav">
            <span className="navlink"><NavLink exact={true} to='/'>Home</NavLink></span>
            <span className="navlink"><NavLink to='/usersignup'>Signup</NavLink></span>
            <span className="navlink"><NavLink to='/usersignin'>Signin</NavLink></span>
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
