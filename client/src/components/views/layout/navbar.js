import React, { Component } from 'react';
import { Link,withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../../actions/auth.actions';
import { clearCurrentProfile } from '../../../actions/profile.actions';

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();

    this.props.history.push("/");
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user,role } = this.props.auth;
    let nav;

    if(role === 'client'){
      nav = <div className="right menu">
      <Link className="ui item" to="/client/profile">
        Profile
      </Link>
      <Link className="ui item" to="/client/dashboard">
        Dashboard
      </Link>
      <Link className="ui item" to="/client/job">
        Create Job
      </Link>
      <Link
        to="/"
        onClick={this.onLogoutClick.bind(this)}
        className="ui item"
      >
        Logout
      </Link>
      </div>
    }else{
      if(role === 'admin'){
        nav = <div className="right menu">
        <Link
          to="/"
          onClick={this.onLogoutClick.bind(this)}
          className="ui item"
        >
          Logout
        </Link>
        </div>
      }
    }
    return (
      <div className="ui secondary menu">
        {(isAuthenticated && user.auth.role === 'client')? <Link className="item" to="/client/dashboard">
              ROUNDPRINT
        </Link> : null}
          {nav}
      </div>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  clearCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(withRouter(Navbar));
