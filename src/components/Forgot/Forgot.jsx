import React from 'react'
import { useForm } from "react-hook-form";
import logo from "../../assets/images/logo.png"
import Email from '../../hooks/HookForm/Email';

//style
import "./Forgot.css"
const Forgot = () => {
    const { handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='main mainLog'>
            <div className='headLog'>
                <img src={logo} alt='logo' />
                <h3>Talents Valley</h3>
            </div>
            <h4>Forgot Password?</h4>
            <p>We'll send a code to your email to reset your password</p>
            <div className='form'>
            <form onSubmit={handleSubmit(onSubmit)}>
                    <Email/>
                    <input type="submit" value="Send Code "/>
                </form>
            </div>
        </div>
    )
}

export default Forgot