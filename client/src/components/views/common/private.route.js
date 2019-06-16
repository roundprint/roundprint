import React,{ Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../../actions/auth.actions';
import PropTypes from 'prop-types';


export default function(ComposeClass,reload,adminRoute){
    class Auth extends Component {
      
      componentDidMount() {
        if(this.props.auth()){
          const { user,isAuthenticated } = this.props.user;

          if(!isAuthenticated){
            if(reload){
              this.props.history.push("/");
            }
          }else{
            if((adminRoute && user.isAdmin ==="admin") || (adminRoute && user.isAdmin ==="manager")){
              if(adminRoute && user.isAdmin === "admin"){
                this.props.history.push("/admin/dashboard");
              }else{
                this.props.history.push("/manager/dashboard");
              }
            }else{
              if(reload === false){
                this.props.history.push("/client/dashboard");
              }
            }
          }
        }
      }
      

      render() {
        return (
          <ComposeClass {...this.props} auth={this.props.auth}/>
        );
      }
  }

  Auth.propTypes = {
    auth: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired

  };

  const mapStateToProps = (state) =>{
    return {
      user: state.auth
    };
  }
  return connect(mapStateToProps,{ auth })(Auth);
}


