import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { loginSchema } from '../../utils/Validation/yup';
import { Link } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
//components
import Logo from '../../components/login&Signup/Logo/Logo';
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
    const [err, setError] = useState();
    //hook
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema),
    }
    );
    //function
    const handelLogin = (data) => {
        fetch(baseURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password,
            }),
        })
            .then(response => response.json())
            .then(result => {
                if (result.statusCode >= 400)
                    setError(result.message)
                else if (result.statusCode < 400)
                    localStorage.setItem("token", result.data.accessToken);
                localStorage.setItem("refreshToken", result.data.refreshToken);
                { navigate('/verification') }
            })
            .catch((err) => {
                console.log(err);
            });
    }
    const erremail = errors.email && errors.email.message
    const errPassword = errors.password && errors.password.message
    return (
        <Container style={{ height: '821px', }}>
            <Logo />
            <Title>Login to Your Account</Title>
            <div className='form'>
                <form onSubmit={handleSubmit(handelLogin)}>
                    <Input err={err || erremail} placeholder='email@gmail.com' register={register} value="Email" name="email" type="email" />
                    <Password label="Password" register={register} name='password' err={err || errPassword} />
                    <Link className='forget' to="/forgot">Forgot Password?</Link>
                    <div className='errMsg'>{errPassword ? errPassword : err}</div>
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