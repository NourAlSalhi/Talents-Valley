import React from 'react'
import { useForm } from "react-hook-form";
import Button from '../../hooks/HookForm/Button/Button';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
//style
import "./CheckEmail.css"

const CheckEmail = () => {
    //variable
    const arrNum1 = [1, 2, 3];
    const arrNum2 = [4, 5, 6];
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
                    {arrNum1.map(number =>
                        <div key={number.toString()} className='codeNum'><input className='number' {...register("code")} /> </div>
                    )}
                    {arrNum2.map((number) =>
                        <div key={number.toString()} className='codeNum  '><input className='number '  {...register("code")} /> </div>
                    )}
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