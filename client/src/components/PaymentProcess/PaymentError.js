import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { Link } from 'react-router-dom';



class PaymentError extends Component{
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    render(){
        const { user } = this.props.auth;
        
    return(
        <div style={{ height: '100vh' }} className='container valign-wrapper'>
            
            <div className = 'row'>
                <div className = 'col s12 center-align'>
                    <h4 style={{marginTop: '-70px'}}>
                        <b>Sorry, </b>{user.name.split(" ")[0]}
                        <p className="flow-text white-text text-darken-1">
                            Your Payment <b>Did Not</b> go through please try again{" "}
                        </p>
                    </h4>
                  
                    <button
                        style={{
                            width: '150px',
                            borderRadius: '3px',
                            letterSpacing: '1.5px',
                            marginTop: '1rem',
                            
                        }}
                       
                        className="btn btn-large waves-effect waves-light hoverable yellow accent-3">
                            <Link to="/dashboard">Try Again</Link>
                        </button>
                    <button
                        style={{
                            width: '150px',
                            borderRadius: '3px',
                            letterSpacing: '1.5px',
                            marginTop: '1rem'
                        }}
                        onClick={this.onLogoutClick}
                        className="btn btn-large waves-effect waves-light hoverable blue accent-3">
                            Logout
                        </button>
                </div>
                
            </div>
        </div>
        
    )
    }
}

PaymentError.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(PaymentError)