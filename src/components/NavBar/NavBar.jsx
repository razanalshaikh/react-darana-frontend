import React from 'react'
import logo from '../../assets/logo/darana_logo.png';

function NavBar() {
    return (
        <nav className="navbar is-white" role="navigation" aria-label="main navigation">
            <div className='navbar-brand'>
                <a className='nav-item' >
                    <img src={logo} alt="logo"/> 
                </a>  
            </div>
            <div className='navbar-menu'>
                <div className="navbar-start">
                            <a href='#'className="navbar-item">Home</a>
                            <a href='#'className="navbar-item">Cities</a>
                            <a href='#'className="navbar-item">Places</a>
                </div>
            <div className='navbar-end'>
                <div className='navbar-item'>
                    
                </div>
                <div class="buttons">
                    <a class="button is-success">
                    <strong>Sign up</strong>
                    </a>
                    <a class="button is-light">
                        Log in
                    </a>
                </div>
            </div>
            </div>
        </nav>
    )
}
export default NavBar