import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import Logo from '../../components/Logo/Logo';
import Input from '../../hooks/HookForm/Input/Input';
import Password from '../../hooks/HookForm/Password/Password';
import Button from '../../hooks/HookForm/Button/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../../utils/Validation/yup';
import { Link } from "react-router-dom";
import axios from "axios";
//style
import "./login.css"
//constant
const baseURL = "https://talents-valley.herokuapp.com/api/user/login";
const Login = () => {
    //state
    //hook
    const { register, handleSubmit, formState: { errors } } = useForm(
        {
            resolver: yupResolver(loginSchema),
        }
    );

    //function
    // const submit = (data) => {
    //     console.log(data);
    // }
    const handelSubmit = (data) => {
        axios
            .post(baseURL, {
                email: data.email,
                password: data.password,
            })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }
    // const handeLogin = async (data) => {
    //     let result = await fetch(baseURL, {
    //         method: 'post',
    //         body: JSON.stringify({ 
    //             email: data.email,
    //             password: data.password,
    //          }),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     });
    //     result = await result.json();
    //     console.warn(result);
    //   }


    return (
        <div className='main mainLogin'>
            <Logo />
            <h4>Login to Your Account</h4>
            <div className='form'>
                <form onSubmit={handleSubmit(handelSubmit)}>
                    <Input placeholder='email@gmail.com' register={register} value="Email" name="email" type="email" />
                    {errors.email && <p className='error'>{errors.email.message}</p>}
                    <Password label="Password" register={register} name='password' />
                    {errors.password && <p className='error'> {errors.password.message} </p>}
                    <Link className='forget' to="/forgot">Forgot Password?</Link>
                    <Button value='Sign In ' path="/" type="submit" />
                </form>
                <div className='logAccount'>
                    <p>Don't have an account?<span><Link className='sign' to="/signup">Sign up</Link></span> </p>
                </div>
            </div>
        </div>
    )
}

export default Login