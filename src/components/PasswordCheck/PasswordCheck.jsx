import React from 'react'
import logo from "../../assets/images/logo.png"
import check from "../../assets/images/check.png"
//style
import "./passwordCheck.css"
const PasswordCheck = () => {
    return (
        <div className='mainLog mainCheck'>
            <div className='headLog'>
                <img src={logo} alt='logo' />
                <h3>Talents Valley</h3>
            </div>
            <img className='check' src={check} />
            <h4>Password Reset</h4>
            <p>Your Password has been Successfully Reset.
                Click Below To Login</p>
                <input type="submit" value="Sign In "/>
        </div>
    )
}

export default PasswordCheck