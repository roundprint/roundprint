import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PrivateRoute from './common/private.route';

import Navbar from './layout/navbar';
import Landing from './layout/landing';
import Register from './auth/register';
import Login from './auth/login';
import Dashboard from './dashboard/dashboard';
import NotFound from './not-found/not.found';


class Routes extends Component {
  render() {
    const { isAuthenticated, user } = this.props.auth;

      const guestLanding = (
        <div className="ui grid">
          <div className="eight wide column">
            <Landing />
          </div>
          <div className="eight wide column">
            <Navbar />
            <div className="container">
              <Route exact path="/guest-register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch>
              <Route exact path="/not-found" component={NotFound} />
            </div>
          </div>
        </div>)

      const authLanding = (
        <div className="routes">
            <Navbar />
            <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch>
              <Route exact path="/not-found" component={NotFound} />
            </div>
        </div>)

    return (
        <div>
            {isAuthenticated ? authLanding : guestLanding}
        </div>
    );
  }
}

Routes.propTypes = {
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(mapStateToProps)(
    Routes
  );
