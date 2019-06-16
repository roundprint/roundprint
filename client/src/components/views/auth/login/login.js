import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../../../actions/auth.actions';
import Landing from './login.landing';
import InputGroup from '../../common/input.group';
import TextFieldGroup from '../../common/text.field.group';

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
    
    this.props.loginUser(userData);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <div>
        <div className="ui grid">
          <div className="ten wide column">
            <Landing />
          </div>
          <div className="six wide column">
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
                <div className="field">
                  <div className="ui checkbox">
                    <input type="checkbox" tabIndex="0" className="hidden"/>
                    <label>I agree to the Terms and Conditions</label>
                  </div>
                </div>
                <button className="ui fluid large primary button" type="submit" style={{marginTop:"1.5em"}}>
                    Sign in
                </button>
              </form>
              <hr style={{marginBottom:"1em",marginTop:"1em"}}/>
              <div className="ui grid">
                <div className="six wide column">
                  <Link to="/register">Forget password</Link>
                </div>
                <div className="ten wide column">
                  <p>Don't have an account?
                    <span className="mini ui button" style={{marginLeft:"1em"}}>
                      <Link to="/register">Sign Up</Link>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
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
