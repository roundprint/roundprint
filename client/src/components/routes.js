import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Auth from './views/common/private.route';

import Navbar from './views/layout/navbar';
import Register from './views/client/auth/register/register';
import Login from './views/client/auth/login/login';
import Dashboard from './views/client/dashboard/dashboard';
import Job from './views/client/job/job';
import CreateJob from './views/client/job/create.job';
import Profile from './views/client/profile/profile';
import CreateProfile from './views/client/profile/create.profile'

import AdminDashboard from './views/admin/dashboard/admin.dashboard'
import AdminLogin from './views/admin/auth/login/login';

import NotFound from './views/not-found/not.found';


class Routes extends Component {
  render() {
    return (
        <Router>
          <div>
            <Route exact path="/client/register" component={Auth(Register,false)} />
            <Route exact path="/" component={Auth(Login,false)} />
            <div className="ui container">
              <Navbar />
              <Switch>
                <Route exact path="/print" component={Auth(AdminLogin,false)} />
              </Switch>
              <Switch>
                <Route path="/client/dashboard" exact component={Auth(Dashboard,true)} />
              </Switch>
              <Switch>
                <Route exact path="/client/job" component={Auth(Job,true)} />
              </Switch>
              <Switch>
                <Route exact path="/client/create-job" component={Auth(CreateJob,true)} />
              </Switch>
              <Switch>
                <Route exact path="/client/profile" component={Auth(Profile,true)} />
              </Switch>
              <Switch>
                <Route exact path="/client/create-profile" component={Auth(CreateProfile,true)} />
              </Switch>
              <Switch>
                <Route path="/admin/dashboard" exact component={Auth(AdminDashboard,true,true)} />
              </Switch>
              <Route exact path="/not-found" component={Auth(NotFound,null)} />
            </div>
          </div>
        </Router>
    );
  }
}

export default Routes;
