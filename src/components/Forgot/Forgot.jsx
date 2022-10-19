import React from 'react'
import { useForm } from "react-hook-form";
import Logo from '../Logo/Logo';
import Email from '../../hooks/HookForm/Email';
import Button from '../../hooks/HookForm/Button/Button';
//style
import "./Forgot.css"

const Forgot = () => {
    const { handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='main mainLog'>
            <Logo />
            <h4>Forgot Password?</h4>
            <p>We'll send a code to your email to reset your password</p>
            <div className='form'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Email />
                    <Button value="Send Code " path='/checkEmail' />
                </form>
            </div>
        </div>
    )
}

export default Forgot