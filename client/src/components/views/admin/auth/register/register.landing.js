import React, { Component } from 'react';
import {withRouter, Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import { Carousel } from 'react-responsive-carousel';

import img1 from '../../../../img/showcase.jpg';
import img2 from '../../../../img/open-laptop.jpg';

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('client/dashboard');
    }
  }

  render() {
    const { isAuthenticated } =this.props.auth;
    
    return (
        <div className="register-landing">
          <div>
            <h1 className="ui large header center aligned">ROUNDPRINT</h1>
            <Carousel 
              showArrows={false} 
              showStatus={false} 
              showIndicators={false} 
              showThumbs={false} 
              autoPlay={true} 
              infiniteLoop={true}
              interval={6000}>
              <div>
                  <img src={img1} />
              </div>
              <div>
                  <img src={img2}/>
                  <p className="legend" style={{backgroundColor:"transparent",color:"#2185d0"}}>Yes Round Print The way</p>
              </div>
              <div>
                  <img src={img1} />
                  <p className="legend">Legend 3</p>
              </div>
            </Carousel>
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
