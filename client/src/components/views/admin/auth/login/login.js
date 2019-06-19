import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../../../../actions/auth.actions';
import Landing from './login.landing';
import InputGroup from '../../../common/input.group';
import TextFieldGroup from '../../../common/text.field.group';

class AdminLogin extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.role === 'admin') {
      this.props.history.push('/admin/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.role === 'admin') {
      this.props.history.push('/admin/dashboard');
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    
    this.props.loginUser(userData);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
        <div className="login">
        <div className="ui icon tiny header center aligned">
            <i className="lock icon" style={{color:'#2185d0'}}></i>
            <h1>Sign In</h1>
          </div>
        <form className="ui form" onSubmit={this.onSubmit}>
          <TextFieldGroup
                placeholder="Email Address"
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.onChange}
                error={errors.email}
              />
            <InputGroup
              placeholder="Password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.onChange}
              error={errors.password}
            />
            <button className="ui fluid large primary button" type="submit" style={{marginTop:"1.5em"}}>
                Sign in
            </button>
          </form>
        </div>
    );
  }
}

AdminLogin.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(withRouter(AdminLogin));
