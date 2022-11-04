import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { loginSchema } from '../../utils/Validation/yup';
import { Link } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
//components
import Logo from '../../components/Logo/Logo';
import Input from '../../hooks/HookForm/Input/Input';
import Password from '../../hooks/HookForm/Password/Password';
import Button from '../../hooks/HookForm/Button/Button';
//style
import { Container, FooterSign, Title } from './LoginStyle';
//constant
const baseURL = 'https://talents-valley.herokuapp.com/api/user/login';
const Login = () => {
    const navigate = useNavigate();
    //state
    const [err,setError]=useState();
    //hook
    const { register, handleSubmit, formState: { errors } } = useForm();
    //function
    const handelLogin = (data) => {
        fetch(baseURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: data.email,
                password: data.password,
            }),
        })
            .then(response => response.json() )
            .then( result => {
                // localStorage.setItem("refreshToken", JSON.stringify(result.data.refreshToken));
                if (result.statusCode >= 400)
                setError(result.message)
              else if(result.statusCode < 400 )
               {navigate('/home')}
               localStorage.setItem("token", JSON.stringify(result.data.accessToken));
            })
            .catch((err) => {
                console.log(err);
            });
    }
    // useEffect(() => {
    //     const loggedInUser = localStorage.getItem("token");
    //     if (loggedInUser) {
    //         const foundUser = JSON.stringify(loggedInUser);
    //         setUser(foundUser);
    //     }
    // }, []);
    return (
        <Container style={{ height: '821px', }}>
            <Logo />
            <Title>Login to Your Account</Title>
            <div className='form'>
                <form onSubmit={handleSubmit(handelLogin)}>
                    <Input placeholder='email@gmail.com' register={register} value="Email" name="email" type="email" />
                    {/* {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>} */}
                    <Password label="Password" register={register} name='password' />
                    {/* {errors.password && <p style={{ color: 'red' }}> {errors.password.message} </p>} */}
                    <p style={{ color: 'red' }}>{err}</p>
                    <Link className='forget' to="/forgot">Forgot Password?</Link>
                    <Button value='Sign In ' type="submit" />
                </form>
                <FooterSign>
                    <p>Don't have an account?<span><Link className='sign' to="/signup">Sign up</Link></span> </p>
                </FooterSign>
            </div>
        </Container>
    )
}

export default Login