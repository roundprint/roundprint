import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../../actions/authActions';
import InputGroup from '../common/input.group';
import TextFieldGroup from '../common/text.field.group';

class Login extends Component {
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
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
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
    
    console.log(userData)

    this.props.loginUser(userData);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="login">
        <h1 className="ui header center aligned">Log In</h1>
        <h4 className="ui header center aligned">
          Sign in to your ROUNDPRINT account
        </h4>
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
          <div className="field">
            <div className="ui checkbox">
              <input type="checkbox" tabindex="0" className="hidden"/>
              <label>I agree to the Terms and Conditions</label>
            </div>
          </div>
          <button className="ui fluid large primary button" type="submit">
              Sign in
          </button>
        </form>
        <hr/>
        <div className="">
          <p>Don't have an account?<span className="ui button"><Link to="/register">Register</Link></span></p>
        </div>
        </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);
