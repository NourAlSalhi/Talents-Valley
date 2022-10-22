import React from 'react'
import { useForm } from "react-hook-form";
import Logo from '../Logo/Logo';
import Input from '../../hooks/HookForm/Input/Input';
import Button from '../../hooks/HookForm/Button/Button';
//style
import "./Forgot.css"

const Forgot = () => {
    const { register,handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='main mainLogin forgot'>
            <Logo />
            <h4>Forgot Password?</h4>
            <p>We'll send a code to your email to reset your password</p>
            <div className='form'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input placeholder='email@gmail.com' register={register} value="Email" name="email" type="email" />
                    <Button value="Send Code " path='/checkEmail' />
                </form>
            </div>
        </div>
    )
}

export default Forgot