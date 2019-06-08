import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Login from '../auth/login';
import Register from '../auth/register';
import HomeHeader from './home.header';
import Landing from './landing';

class Home extends Component {
  render() {
    return (
        <div class="ui grid">
            <div class="eight wide column">
                <Landing />
            </div>
            <div class="eight wide column">
                <HomeHeader />
                <Switch>
                    <Route exact path="/register" component={Register} />
                </Switch>
                <Switch>
                    <Route exact path="/" component={Login} />
                </Switch>
            </div>
        </div>
    );
  }
}


export default Home;
