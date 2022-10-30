import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { loginSchema } from '../../utils/Validation/yup';
import { Link } from "react-router-dom";
import axios from "axios";
import { yupResolver } from '@hookform/resolvers/yup';
//components
import Logo from '../../components/Logo/Logo';
import Input from '../../hooks/HookForm/Input/Input';
import Password from '../../hooks/HookForm/Password/Password';
import Button from '../../hooks/HookForm/Button/Button';
import Home from '../Home/Home'
//style
import { Container, FooterSign, Title } from './LoginStyle'
//constant
const baseURL = "https://talents-valley.herokuapp.com/api/user/login";
const Login = () => {
    //state
    const [user, setUser] = useState()
    //hook
    const { register, handleSubmit, formState: { errors } } = useForm(
        {
            resolver: yupResolver(loginSchema),
        }
    );
    //function
    // const handelLogin = (dataUser) => {
    //     axios
    //         .post(baseURL, {
    //             email: dataUser.email,
    //             password: dataUser.password,
    //         })
    //         .then(response => {
    //             setUser(response.data)
    //             localStorage.setItem("token", JSON.stringify(response.data));
    //             console.log(response)
    //         })
    // }
    const handelLogin = (data) => {
        fetch(baseURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password,
            }),
        })
            .then((response) => {
                console.log(response);
                if (response.status === 200) {
                    // localStorage.setItem("token", JSON.stringify(data));
                    setUser(response.data)
                    console.log("sucess");
                } else {
                    console.log("error");
                }
                response.json()
                    .then((resp) => {
                        console.log(resp)
                        localStorage.setItem("token", JSON.stringify(resp.data.accessToken));  //resp.data.accessToken
                    })
            })
            .catch((error) => {
                console.log(error);
            });
    }
    // useEffect(() => {
    //     const loggedInUser = localStorage.getItem("token");
    //     if (loggedInUser) {
    //         const foundUser = JSON.stringify(loggedInUser);
    //         setUser(foundUser);
    //     }
    // }, []);
    if (user) {
        return <div> is login </div>;
    }
    return (
        <Container style={{ height: '821px', }}>
            <Logo />
            <Title>Login to Your Account</Title>
            <div className='form'>
                <form onSubmit={handleSubmit(handelLogin)}>
                    <Input placeholder='email@gmail.com' register={register} value="Email" name="email" type="email" />
                    {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
                    <Password label="Password" register={register} name='password' />
                    {errors.password && <p style={{ color: 'red' }}> {errors.password.message} </p>}
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