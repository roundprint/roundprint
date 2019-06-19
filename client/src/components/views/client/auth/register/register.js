import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter,Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../../../../actions/auth.actions';
import Landing from './register.landing';
import TextFieldGroup from '../../../common/text.field.group';
import InputGroup from '../../../common/input.group';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      lastname: '',
      phonenumber: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('client/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      lastname: this.state.lastname,
      phonenumber: this.state.phonenumber,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
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
            <div className="register">
              <div className="ui icon tiny header center aligned">
                <i className="address book icon" style={{color:"#f50057"}}></i>
                <h1>Sign Up</h1>
              </div>
              <form className="ui form" onSubmit={this.onSubmit}>
              <TextFieldGroup
                            placeholder="First Name"
                            name="name"
                            value={this.state.name}
                            onChange={this.onChange}
                            error={errors.name}
                          />
              <TextFieldGroup
                            placeholder="Last Name"
                            name="lastname"
                            value={this.state.lastname}
                            onChange={this.onChange}
                            error={errors.lastname}
                          />
                          <TextFieldGroup
                            placeholder="Email"
                            name="email"
                            type="email"
                            value={this.state.email}
                            onChange={this.onChange}
                            error={errors.email}
                            info="This site uses Gravatar so if you want a profile image, use a Gravatar email"
                          />
                          <TextFieldGroup
                            placeholder="Phone Number"
                            name="phonenumber"
                            type="text"
                            value={this.state.phonenumber}
                            onChange={this.onChange}
                            error={errors.phonenumber}
                          />
                          <InputGroup
                            placeholder="Password"
                            name="password"
                            type="password"
                            value={this.state.password}
                            onChange={this.onChange}
                            error={errors.password}
                          />
                          <InputGroup
                            placeholder="Confirm Password"
                            name="password2"
                            type="password"
                            value={this.state.password2}
                            onChange={this.onChange}
                            error={errors.password2}
                          />
                  <button className="ui fluid large primary button" type="submit">
                      Register
                  </button>
                </form>
                <hr/>
                <div className="">
                  <p>Already have an account?
                    <span className="mini ui button" style={{marginLeft:"1em"}}>
                      <Link to="/">Sign In</Link>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
