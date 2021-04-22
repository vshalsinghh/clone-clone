import React from 'react'
import './modal.scss'

const Modal = ({toggleShow}) => {
    const handleClick = (e) => {
        e.preventDefault();
        if(e.target.className === 'modal'){
            toggleShow(false)
        }
    }
    return (
        <div className='modal' onClick={(e) => handleClick(e)}>
            <div className='modal-content' onClick={(e) => handleClick(e)}>
                <div className='login-left'>
                <div className='stars'></div>
                    <img className='rocket-image' src='https://brilliant.org/site_media/version-3462815dcf/images/product-rocket_withvector_transparent.gif'
                        alt='rocket' />
                </div>
                <div className='login-right'>
                    <div className='content'>
                        <div className='modal-header'>Excel in math and science.</div>
                        <div className='buttons'>
                            <a className='btn facebook' href='/'>
                                <span className='logo face-logo'></span>
                                <span>Log in with Facebook</span>
                            </a>
                            <a className='btn google' href='/'>
                                <span className='logo google-logo'></span>
                                <span>Log in with Google</span>
                            </a>
                            <a className='btn apple' href='/'>
                                <span>Continue with Apple</span>
                            </a>
                            <a className='btn email' href='/'>
                                <span>Log in with Email</span>
                            </a>
                        </div>
                        <div className='modal-footer'>
                            New user?<a className='btn-link' href='/'>Sign up</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Modal