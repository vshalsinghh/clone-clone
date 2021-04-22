import React from 'react'
import './header.scss'

const Header = ({ toggleShow }) => {
    return (
        <div className='header'>
             <div className='navbar'>
                <div className='hdr-logo'>
                    <a href='/' className='logo'>
                        Brilliant
                    </a>
                </div>
                <div className='hdr-nav'>
                    <div className='hdr-links'>
                        <a className='hdr-link' href='/' >Today</a>
                        <a className='hdr-link' href='/'>Courses</a>
                        <a className='hdr-link' href='/'>Practice</a>
                    </div>
                    <div className='hdr-btn'>
                        <button className='btn login-btn'  onClick={() => toggleShow(true)}>Login</button>
                        <button className='btn signup-btn' onClick={() => toggleShow(true)}>Sign-up</button>                  
                        
                    </div>
                    
                </div>
            </div>
        </div>
       
    )
}
export default Header