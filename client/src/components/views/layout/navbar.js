import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../../actions/authActions';

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
          <Link className="ui item" to="/create-job">
            Create Job
          </Link>
          <Link className="ui item" to="/profile">
            Profile
          </Link>
          <Link className="ui item" to="/dashboard">
            Dashboard
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
      <div class="right menu">
          <Link className="ui item" to="/login">
            Login
          </Link>
        </div>
    );

    return (
      <div class="ui secondary menu">
        {isAuthenticated ? <Link className="item" to="/dashboard">
              ROUNDPRINT
        </Link> : <Link className="item" to="/login">
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
