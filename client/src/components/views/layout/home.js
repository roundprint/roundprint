import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Login from '../auth/login';
import Register from '../auth/register';
import Landing from './landing';

class Home extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  render() {
      let reg = false
      const { isAuthenticated, user } = this.props.auth;

      const guestLinks = (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/register">
              Sign Up
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
  

    return (
        <div class="ui grid">
            <div class="eight wide column">
            <Landing />
            </div>
            <div class="eight wide column">
                <div>
                    <h1 className="">Logo</h1>
                    <div className="navbar">
                    <div className="ui container">
                    <div className="collapse navbar-collapse" id="mobile-nav">
                        {isAuthenticated ? guestLinks : guestLinks}
                        </div>
                    </div>
                </div>
                </div>
                {(reg===true)?<Register/>:<Login/>}
            </div>
        </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Home);
