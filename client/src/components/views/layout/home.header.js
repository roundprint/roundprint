import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class HomeHeader extends Component {

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const register = (
        <ul className="navbar-nav ml-auto">
        <li className="nav-item" style={{marginRight:"10%"}}>
          <button class="btn btn-primary-inverse btn-sm" type="submit">
            <Link className="nav-link" to="/register">
              Sign Up
            </Link>
          </button>
        </li>
      </ul>
    );

    const login = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <button class="btn btn-primary-inverse btn-sm" type="submit">
              <Link className="nav-link" to="/login">
                Login
              </Link>
          </button>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-sm mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            ROUNDPRINT
          </Link>
          <div className="collapse navbar-collapse" id="mobile-nav">
            {isAuthenticated ? login : register}
          </div>
        </div>
      </nav>
    );
  }
}

HomeHeader.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(
  HomeHeader
);
