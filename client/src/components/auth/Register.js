import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import './auth.css';
import team from '../../images/boyle-team2.png';
class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }
componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }
  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
onSubmit = e => {
    e.preventDefault();
const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      number: this.state.number,
      address: this.state.address,
      emergencyName: this.state.emergencyName,
      emergencyRelationship: this.state.emergencyRelationship,
      emergencyNumber: this.state.emergencyNumber
    };
this.props.registerUser(newUser, this.props.history); 
  };
render() {
    const { errors } = this.state;
return (
      <div>
        <div className="floatLefts">
         
        <img src={team} alt="boyle-celtic-team" style={{ marginTop: '-10px'}} />
          <h2 className="register" 
              style={{
                fontSize: '2.2em',
                width: '40%',
      
                marginLeft: '50px',
                marginTop: '-80px',
                color: 'white'
              }}>
            Want to play football this year?
          </h2>
          <span className="checksocial"
                style={{ 
                  fontSize: '1.3em',
                  marginLeft: '50px',
                  marginTop: '20px',
                  fontFamily: 'Play',
                  textAlign: 'justify',
                  color: 'white'
                }}>
            Register with Boyle Celtic to sign up for the 2020/2021 season. <br></br>
            
          </span>
          <div className="social-media">
          <img style={{ marginTop:'10px',marginLeft: '35px', marginRight: '10px', borderRadius:'50%', background:'#fff'}} src="https://img.icons8.com/windows/32/000000/facebook-new.png" alt="facebook-icon"/>
          <img style={{marginTop:'10px',marginLeft: '35px', marginRight: '10px', borderRadius:'50%', background:'#fff', width: '32px', height: '32px'}} src="https://img.icons8.com/ios/50/000000/twitter.png" alt="twitter-icon"/>
          <img style={{marginTop:'10px',marginLeft: '35px', marginRight: '10px', borderRadius:'50%', background:'#fff'}} src="https://img.icons8.com/windows/32/000000/instagram-new.png" alt="instagram-icon"/>
          </div>
        </div>
      <div className="container" id="floatRight">
       
        <div className="row">
          <div className="col s8 offset-s2">
            <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Register</b> below
              </h4>
              <p className="grey-text text-darken-1">
                Already have an account? <Link to="/login">Log in</Link>
              </p>
            </div>
            <form className="regfrom" snoValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="text"
                  className={classnames("", {
                    invalid: errors.name
                  })}
                />
                <label htmlFor="name">Name</label>
                <span className="red-text">{errors.name}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email
                  })}
                />
                <label htmlFor="email">Email</label>
                <span className="red-text">{errors.email}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password
                  })}
                />
                <label htmlFor="password">Password</label>
                <span className="red-text">{errors.password}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password2
                  })}
                />
                <label htmlFor="password2">Confirm Password</label>
                <span className="red-text">{errors.password2}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.number}
                  error={errors.number}
                  id="number"
                  type="text"
                  className={classnames("", {
                    invalid: errors.number
                  })}
                />
                <label htmlFor="number">Number</label>
                <span className="red-text">{errors.number}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.address}
                  error={errors.address}
                  id="address"
                  type="text"
                  className={classnames("", {
                    invalid: errors.address
                  })}
                />
                <label htmlFor="address">Address</label>
                <span className="red-text">{errors.address}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.emergencyName}
                  error={errors.emergencyName}
                  id="emergencyName"
                  type="text"
                  className={classnames("", {
                    invalid: errors.emergencyName
                  })}
                />
                <label htmlFor="emergencyName">Emergency Name</label>
                <span className="red-text">{errors.emergencyName}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.emergencyRelationship}
                  error={errors.emergencyRelationship}
                  id="emergencyRelationship"
                  type="text"
                  className={classnames("", {
                    invalid: errors.emergencyRelationship
                  })}
                />
                <label htmlFor="emergencyRelationship">Emergency Relationship</label>
                <span className="red-text">{errors.emergencyRelationship}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.emergencyNumber}
                  error={errors.emergencyNumber}
                  id="emergencyNumber"
                  type="text"
                  className={classnames("", {
                    invalid: errors.emergencyNumber
                  })}
                />
                <label htmlFor="emergencyNumber">Emergency Number</label>
                <span className="red-text">{errors.emergencyNumber}</span>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Sign up
                </button>
              </div>
            </form>
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
export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));