import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../../actions/auth.actions';

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <div className="right menu">
          <Link className="ui item" to="/profile">
            Profile
          </Link>
          <Link className="ui item" to="/dashboard">
            Dashboard
          </Link>
          <Link className="ui item" to="/job">
            Create Job
          </Link>
          <a
            href=""
            onClick={this.onLogoutClick.bind(this)}
            className="ui item"
          >
            Logout
          </a>
      </div>
    );

    const guestLinks = (
      <div className="right menu">
          <Link className="ui item" to="/">
            Login
          </Link>
        </div>
    );

    return (
      <div className="ui secondary menu">
        {isAuthenticated ? <Link className="item" to="/dashboard">
              ROUNDPRINT
        </Link> : <Link className="item" to="/">
              ROUNDPRINT
        </Link>}
        
          {isAuthenticated ? authLinks : guestLinks}
      </div>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(
  Navbar
);
