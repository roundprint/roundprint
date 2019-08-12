import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link,Redirect } from 'react-router-dom';

import { getCurrentProfile } from '../../../../actions/profile.actions'

class Profile extends Component {

    componentDidMount() {
        if(!this.props.getCurrentProfile()){
            return <Redirect to="/client/dashboard" />
        }

        this.props.getCurrentProfile();
        
    }
    
    render() {
        
        const { profile,loading } = this.props.profile;
        const { user } = this.props.auth;

        if(loading){
            return(
                <div className="ui">
                    <div className="ui active inverted dimmer">
                        <div className="ui huge text loader" >Loading</div>
                    </div>
                </div>
            )
        }

        return (
            <div className="profile">
                {(profile !== null && Object.keys(profile).length>0)?
                <span>
                    <div className="ui equal width center aligned padded grid">
                        <div className="row">
                            <div className="column">
                                <h2 style={{paddingTop: '2em'}}><span>{user.auth.name}</span><span style={{paddingLeft:".5em"}}>{user.auth.lastname}</span></h2>
                                <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                                <h5>Phone : <span>{profile.client.phonenumber}</span></h5>
                                <h5>Email : <span>{profile.client.email}</span></h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="column">
                                    <h2 className="ui large header" style={{paddingTop: '2em'}}>Programme : <span>{profile.academic[0].program}</span></h2>
                                    <h5 className="ui header">REG NUMBER : <span>{profile.regnumber}</span></h5>
                                    
                                    <h5>Year : <span>{profile.academic[0].year}</span></h5>
                                    
                                    <h5>Semester : <span>{profile.academic[0].semester}</span></h5>
                                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                                </div>
                            </div>
                    </div>
                    <div>
                        <button type="submit" className="ui animated button" tabIndex="0">
                            <Link to="/client/create-profile">
                                <div className="visible content">Edit Profile</div>
                                <div className="hidden content">
                                    <i className="right arrow icon"/>
                                </div>
                            </Link>
                        </button>
                    </div>
                </span>
                :
                <span>
                    <div className="ui equal width center aligned padded grid">
                        <div className="row">
                            <div className="column">
                                <h2 style={{paddingTop: '2em'}}> Welcome <span>{user.auth.name}</span><span style={{paddingLeft:".5em"}}>{user.auth.lastname}</span></h2>
                                <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                                <h3 style={{paddingTop: '1em'}}> You Don't Have Profile Yet !</h3>
                                <button type="submit" className="ui animated button" tabIndex="0">
                                    <Link to="/client/create-profile">
                                        <div className="visible content">Create Profile</div>
                                        <div className="hidden content">
                                            <i className="right arrow icon"/>
                                        </div>
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </span>
                }
            </div>
        );
    }
}

Profile.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = (state)=> {
    return {
        auth: state.auth,
        profile: state.profile
    };
}

export default connect(mapStateToProps,{ getCurrentProfile })(Profile);