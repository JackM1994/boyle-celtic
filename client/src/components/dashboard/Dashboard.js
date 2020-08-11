import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import Payment from '../Payment/Payment';
import Covid19 from './covid19.pdf';


class Dashboard extends Component{
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    render(){
        const { user } = this.props.auth;
        
    return(
        <div style={{ height: '125vh' }} className='container valign-wrapper'>
            <div className = 'row'>
                <div className = 'col s12 center-align'>
                    <h4 style={{marginTop: '-70px'}}>
                        <b>Hey There,</b>{user.name.split(" ")[0]}
                        <p className="flow-text white-text text-darken-1">
                            Welcome to Boyle Celtic FC{" "}
                            <span style={{ fontFamily: 'monospace'}}>REGISTRATION</span> app
                        </p>
                    </h4>
                    <div className="forms">
                   
                    <img src="https://img.icons8.com/fluent/96/000000/bank-cards.png" alt="google-form"/>
                    <span style={{fontFamily:'Play', display: 'block',color: 'white', fontSize:'1.5em', marginBottom: '20px'}}className="form-title">
                    
                    <Payment 
                        name={'Boyle Celtic FC'}
                        description={'Registration 20/21 Season'}
                        amount={60.00}
                        />
                    
                   </span>

                    
                    <a href={Covid19}><img src="https://img.icons8.com/ios/150/000000/google-docs.png" alt="google-form"/></a>
                    <span style={{fontFamily:'"Roboto", sans-serif', display: 'block',color: 'white', fontSize:'1.5em'}}className="form-title">Covid-19 Form</span>
                    </div>
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

Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Dashboard)