import React from "react";
import { Link, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
// import Welcome from './Welcome';
import UserSignupForm from './UserSignupForm';
import UserSigninForm from './UserSigninForm';
import UserSignoutForm from './UserSignoutForm';
// import ActivitiesContainer from './ActivitiesContainer';

function Loading(props) {
  if (props.error) {
    return <div>Error! <button onClick={ props.retry }>Retry</button></div>;
  } else if (props.timedOut) {
    return <div>Taking a long time... <button onClick={ props.retry }>Retry</button></div>;
  } else if (props.pastDelay) {
    return <div>Loading...</div>;
  } else {
    return null;
  }
}

const ActivitiesContainer = Loadable({
  loader: () => import('./ActivitiesContainer'),
  loading: Loading,
  delay: 300, // 0.3 seconds
  timeout: 10000, // 10 seconds
});

const Welcome = Loadable({
  loader: () => import('./Welcome'),
  loading: Loading,
  delay: 300, // 0.3 seconds
  timeout: 10000, // 10 seconds
});

const Header = () => {
  if (localStorage.accessToken) {
    return (
        <header>
          <nav>
            <div className="nav">
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/activities'>Activities</Link></li>
                <li><Link to='/usersignout'>Sign Out</Link></li>
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
