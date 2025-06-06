import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo/darana_logo.png'
import { Link } from 'react-router'
import SignUp from '../../pages/SignUp'
import Login from '../../pages/Login'

function NavBar(props) {
    
    return (
        <nav className="navbar is-light is-fixed-top" role="navigation" aria-label="main navigation">
            <div className='navbar-brand'>
                <a className='nav-item' href='/'>
                    <img src={logo} alt="logo" height='20%' width='50%'/> 
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
                <div className="buttons">
                    <a className='button is-light'>
                        EN
                    </a>
                    {
                        props.loggedin? '' : <Link to="/signup" className="button is-success">
                        <strong>Sign up</strong>
                        </Link>
                    }
                    
                    { props.loggedin?
                        <Link to="/"className="button is-danger is-dark" onClick={props.logout}>
                            Logout
                        </Link> :
                        <Link to="/login"className="button is-light" >
                        Login
                        </Link>
                    }
                    
                    
                </div>
            </div>
            </div>
        </nav>
    
    )
}
export default NavBar