import React from 'react'
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
//style
import { Container, FooterSign, Title } from './LoginStyle'
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
        <Container style={{height: '821px',}}>
            <Logo />
            <Title>Login to Your Account</Title>
            <div className='form'>
                <form onSubmit={handleSubmit(handelSubmit)}>
                    <Input placeholder='email@gmail.com' register={register} value="Email" name="email" type="email" />
                    {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
                    <Password label="Password" register={register} name='password' />
                    {errors.password && <p style={{ color: 'red' }}> {errors.password.message} </p>}
                    <Link className='forget' to="/forgot">Forgot Password?</Link>
                    <Button value='Sign In ' path="/" type="submit" />
                </form>
                <FooterSign>
                    <p>Don't have an account?<span><Link className='sign' to="/signup">Sign up</Link></span> </p>
                </FooterSign>
            </div>
        </Container>
    )
}

export default Login