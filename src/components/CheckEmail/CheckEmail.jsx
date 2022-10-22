import React from 'react'
import { useForm } from "react-hook-form";
import Button from '../../hooks/HookForm/Button/Button';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
//style
import "./CheckEmail.css"

const CheckEmail = () => {
    //state
    const { register, handleSubmit, formState: { errors } } = useForm();
    //function
    const onSubmit = data => console.log(data);

    return (
        <div className='main mainLogin checkEmail'>
            <Logo />
            <h4>Check Your Email</h4>
            <p>We have sent you an email that contains a code to
                reset your password</p>
            <div className='form'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='codeNum'><input className='number' {...register("code1")} /> </div>
                    <div className='codeNum'><input className='number' {...register("code2")} /> </div>
                    <div className='codeNum'><input className='number' {...register("code3")} /> </div>
                    <div className='codeNum'><input className='number' {...register("code4")} /> </div>
                    <div className='codeNum'><input className='number' {...register("code5")} /> </div>
                    <div className='codeNum'><input className='number' {...register("code6")} /> </div>
                    <Button value="Continue " path="/newPassword" />
                    <div className='logAccount'>
                        <p>Didn't get the code?<span><Link className='sign' to="/checkEmail">Resend</Link></span> </p>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default CheckEmail