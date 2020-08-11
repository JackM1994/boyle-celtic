import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/favicon.png';
import '../../App.css';
class Navbar extends Component {
    render(){
        return(
            <div className="navbar-fixed">
                <nav className="z-depth-0">
                    <div className="nav-wrapper white">
                        <img src={Logo}  alt="boyle-logo"
                            style={{ height: '60px',
                                     width: '75px',
                                     margin: '0 auto',
                                     display: 'block',
                                     textAlign: 'center',
                                    
                                     marginLeft: '15%'
                                        
                            }}/>
                        <Link
                            to="/"
                            
                            style={{ 
                                display: 'block',
                                margin: 'auto 0', 
                                fontFamily: 'Play', 
                                color: 'black',
                                textAlign: 'center',
                                marginTop: '-50px',
                                fontSize: '2.2em'}}>

                                Boyle Celtic FC
                            </Link>
                    </div>
                </nav>
            </div>
        )
    }
}
export default Navbar;