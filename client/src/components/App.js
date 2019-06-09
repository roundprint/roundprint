import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../axios/set.auth.token';
import { setCurrentUser, logoutUser } from '../actions/authActions';

import { Provider } from 'react-redux';
import store from '../store';

import PrivateRoute from './views/common/private.route';

import Navbar from './views/layout/navbar';
import Landing from './views/layout/landing';
import Register from './views/auth/register';
import Login from './views/auth/login';
import Dashboard from './views/dashboard/dashboard';
import Job from './views/job/job';
import Profile from './views/profile/profile';

import NotFound from './views/not-found/not.found';

import './App.css';

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
    window.location.href = '/login';
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="ui grid">
            <div className="eight wide column">
              <Landing />
            </div>
            <div className="eight wide column">
              <Navbar />
              <div className="container">
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Switch>
                  <PrivateRoute exact path="/dashboard" component={Dashboard} />
                </Switch>
                <Switch>
                  <PrivateRoute exact path="/job" component={Job} />
                </Switch>
                <Switch>
                  <PrivateRoute exact path="/profile" component={Profile} />
                </Switch>
                <Route exact path="/not-found" component={NotFound} />
              </div>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
