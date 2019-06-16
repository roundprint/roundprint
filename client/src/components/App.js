import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../axios/set.auth.token';
import { setCurrentUser, logoutUser } from '../actions/auth.actions';

import { Provider } from 'react-redux';
import store from '../store';

import Auth from './views/common/private.route';

import Navbar from './views/layout/navbar';
import Register from './views/auth/register/register';
import Login from './views/auth/login/login';
import Dashboard from './views/dashboard/dashboard';
import Job from './views/job/job';
import Profile from './views/profile/profile';
import CreateProfile from './views/profile/create.profile'

import NotFound from './views/not-found/not.found';

import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = '/';
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/client/register" component={Auth(Register,false)} />
            <Route exact path="/" component={Auth(Login,false)} />
            <div className="ui container">
              <Navbar />
              <Switch>
                <Route path="/client/dashboard" exact component={Auth(Dashboard,true)} />
              </Switch>
              <Switch>
                <Route exact path="/client/job" component={Auth(Job,true)} />
              </Switch>
              <Switch>
                <Route exact path="/client/profile" component={Auth(Profile,true)} />
              </Switch>
              <Switch>
                <Route exact path="/client/create-profile" component={Auth(CreateProfile,true)} />
              </Switch>
              <Route exact path="/not-found" component={Auth(NotFound,null)} />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
