import React, { Component } from 'react';
import {withRouter, Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  render() {
    const { isAuthenticated } =this.props.auth;
    
    return (
        <div className="login-landing">
          <div>
            <h1 className="ui large header center aligned">ROUNDPRINT</h1>
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

export default connect(mapStateToProps)(withRouter(Landing));
