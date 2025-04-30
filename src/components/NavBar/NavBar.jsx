import React from 'react'
import logo from '../../assets/logo/darana_logo.png';

function NavBar() {
    return (
        <nav className="navbar is-light" role="navigation" aria-label="main navigation">
            <div className='navbar-brand'>
                <a className='nav-item' href='/'>
                    <img src={logo} alt="logo" height='20%' width='30%'/> 
                </a>  
            </div>
            <div className='navbar-menu'>
                <div className="navbar-start">
                            <a href='/'className="navbar-item">Home</a>
                            <a href='/cities'className="navbar-item">Cities</a>
                            <a href='/places'className="navbar-item">Places</a>
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