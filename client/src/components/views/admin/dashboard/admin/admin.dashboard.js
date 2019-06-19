import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class AdminDashboard extends Component {

  render() {
    return (
      <div className="dashboard">
        <div className="ui container">
          Admin Dashboard
        </div>
      </div>
    );
  }
}

AdminDashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps)(
  AdminDashboard
);
