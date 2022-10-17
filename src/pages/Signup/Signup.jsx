import React from 'react'
import logo from "../../assets/images/logo.png"
//style
import "./signup.css"
const Signup = () => {
    return (
        <div className='mainSign'>
            <div className='headLog'>
                <img src={logo} alt='logo' />
                <h3>Talents Valley</h3>
            </div>
        </div>
    )
}

export default Signup