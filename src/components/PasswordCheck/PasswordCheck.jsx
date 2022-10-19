import React from 'react'
import Logo from '../Logo/Logo'
import Button from '../../hooks/HookForm/Button/Button'
import check from "../../assets/images/check.png"
//style
import "./passwordCheck.css"

const PasswordCheck = () => {
    return (
        <div className='mainLog mainCheck main'>
            <Logo />
            <img className='check' src={check} />
            <h4>Password Reset</h4>
            <p>Your Password has been Successfully Reset.
                Click Below To Login</p>
            <Button value="Sign In " path="/"/>
        </div>
    )
}

export default PasswordCheck