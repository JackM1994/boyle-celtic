import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/boyle-logo.png';

class Landing extends Component{
    render(){
        return(
       
            <div style={{ height: '105vh' }} className="container valign-wrapper">
                
                <div style={{margin: '0 auto',  textAlign: 'center'}}>
                <img style={{ marginBottom: '10px'}} src={Logo} alt="boyle-celtic crest"/>
                    <h4>
                        <b>Register</b> for the 20/21 Season   
                    </h4>
                    <br />
                    <div className="col s6">
                        <Link 
                            to="/register"
                            style={{
                                width: "140px",
                                borderRadius: "3px",
                                letterSpacing: "1.5px",
                                marginBottom: '10px'
                            }}
                            className="btn btn-large waves-effect waves-light hoverable blue accent-3">
                                Register
                            </Link>
                    </div>
                    <div className="col s6">
                        <Link
                            to="/login"
                            style={{
                                width: "140px",
                                borderRadius: "3px",
                                letterSpacing: "1.5px"
                            }}
                            className="btn btn-large btn-flat waves-effect white black-text">
                                Log In
                            </Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default Landing;