import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect,Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { createProfile,addAcademic,getZones } from '../../../../actions/profile.actions';

class CreateProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
          name: '',
          lastname: '',
          email: '',
          regnumber: '',
          program: '',
          year: '',
          semester: '',
          deliveryzone: '',
          redirect: false,
          errors: {}
        };
    
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      }

      componentDidMount() {
          this.props.getZones()
      }
      
    
      componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
          this.setState({ errors: nextProps.errors });
        }
      }
    
      onSubmit(e) {
        e.preventDefault();
        
        const { profile } = this.props.profile;
        const { user } = this.props.auth;

        let program,email,regnumber;
        
        
            
            program = (Object.keys(profile).length>0 && profile.academic[0].program)?profile.academic[0].program:this.state.program;
            regnumber = (Object.keys(profile).length>0 &&profile.regnumber)?profile.regnumber:this.state.regnumber;
            email = user.email?user.email:this.state.email;


            const profileData = {
                regnumber: regnumber,
                zonename: this.state.deliveryzone,
                email: email
            };
    
            const academicData = {
                program: program,
                year: this.state.year,
                semester: this.state.semester
            };
        
            this.props.createProfile(profileData,academicData, this.props.history);
      }
    
      onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }


    render() {

        const { user } = this.props.auth;
        const { profile } = this.props.profile;
        const { zones } = this.props.zones;
        const { errors } = this.state;

        let options;
        if(zones === null || Object.keys(zones).length<=0){
            return <Redirect to="/client/profile" />
        }else{
            options = zones.map(zone =>{
                return <option key={zone._id} value={zone.name}>{zone.name}</option>
            })
        }     
            

        return (
            <div className="ui">
                <form className="ui form" onSubmit={this.onSubmit}>
                    <div className="ui animated button" tabIndex="0">
                        <Link to="/client/profile">
                            <div className="visible content">Back</div>
                            <div className="hidden content">
                                <i className="left arrow icon"/>
                            </div>
                        </Link>
                    </div>
                    <h4 className="ui center aligned dividing large header" style={{marginBottom: '1em'}} >Hi <span>{user.auth.name}</span>, Create Your Profile </h4>
                    <div className="field">
                        <div className="two fields">
                            <div className="field">
                                <label>First Name</label>
                                <input type="text" readonly="" value={user.auth.name} name="name" onChange={this.onChange} placeholder={user.auth.name}/>
                            </div>
                            <div className="field">
                                <label>Last Name</label>
                                <input type="text" readonly=""  value={user.auth.lastname} name="lastname" onChange={this.onChange} placeholder={user.auth.lastname}/>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <div className="two fields">
                            <div className="field">
                                <label>Email</label>
                                <input type="email" value={this.state.email} name="email" onChange={this.onChange} placeholder={user.auth.email?user.auth.email:"Email"}/>
                            </div>
                            <div className="field">
                                <label>Default Delivery Zone</label>
                                <select className="ui fluid dropdown" value={this.state.deliveryzone} name="deliveryzone"  onChange={this.onChange} placeholder="Default Delivery Zone">
                                    <option value="">Select Delivery Zone</option>
                                    {options}
                                </select>
                                {errors.zonename && <div className="invalid-feedback">{errors.zonename}</div>}
                            </div>
                        </div>
                    </div>
                    <div className="field">
                            <div className="two fields">
                                <div className="field">
                                    <label>Field Of Study</label>
                                    <input type="text" value={this.state.program} name="program" onChange={this.onChange} placeholder={(Object.keys(profile).length>0 && profile.academic[0].program)?profile.academic[0].program:"Degree Program e.g HACC,HBSCT"}/>
                                </div>
                                <div className="field">
                                    <label>Reg #</label>
                                    <input type="text" value={this.state.regnumber} name="regnumber" onChange={this.onChange} placeholder={(Object.keys(profile).length>0 && profile.regnumber)?profile.regnumber:"Registration Number"}/>
                                </div>
                            </div>
                    </div>
                    <div className="two fields">
                        <div className="field">
                        <select className="ui fluid dropdown" value={this.state.year} onChange={this.onChange} name='year' placeholder="Year">
                            <option value="">Year</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                        </select>
                        </div>
                        <div className="field">
                            <select className="ui fluid dropdown" value={this.state.semester} onChange={this.onChange} name='semester' placeholder="Semester">
                                <option value="">Semester</option>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                            </select>
                        </div>
                    </div>
                    <button className="ui button" type="submit" tabIndex="0">{Object.keys(profile).length>0?"Edit":"Create"}</button>
                    </form>
            </div>
        );
    }
}

CreateProfile.propTypes ={
    createProfile: PropTypes.func.isRequired,
    getZones: PropTypes.func.isRequired,
    addAcademic: PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state)=> {
    return {
        auth: state.auth,
        profile: state.profile,
        zones: state.zone,
        errors: state.errors
    };
}

export default connect(
    mapStateToProps,
    { createProfile, addAcademic,getZones }
)(CreateProfile);