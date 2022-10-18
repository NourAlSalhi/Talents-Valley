import React from 'react'
import logo from "../../assets/images/logo.png"
//style
import "./Logo.css"
function Logo() {
    return (
            <div className='headLogo'>
                <img src={logo} alt='logo' />
                <h3>Talents Valley</h3>
            </div>
    )
}

export default Logo