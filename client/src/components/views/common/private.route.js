import React,{ Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


export default function(ComposeClass,reload,adminRoute){
    class Auth extends Component {
      
      componentDidMount() {
          const { isAuthenticated,role } = this.props.user;

          if(!isAuthenticated){
            if(reload){
              this.props.history.push("/");
            }
          }else{
            if(adminRoute){

              if(role === "admin" || role === "manager"){
                this.props.history.push("/admin/dashboard");
              }
            }else{
              if(reload === false){
                this.props.history.push("/client/dashboard");
              }
            }
          }
      }
      

      render() {
        return (
          <ComposeClass />
        );
      }
  }

  Auth.propTypes = {
    user: PropTypes.object.isRequired

  };

  const mapStateToProps = (state) =>{
    return {
      user: state.auth
    };
  }
  return connect(mapStateToProps)(Auth);
}


