import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { forgot } from '../../utils/Validation/yup';
import { useNavigate } from 'react-router-dom';
//components
import Logo from '../Logo/Logo';
import Input from '../../hooks/HookForm/Input/Input';
import Button from '../../hooks/HookForm/Button/Button';
//style
import { Container, Title } from '../../pages/Login/LoginStyle';
import { Main } from './ForgotStyle';
//constant
const baseURL = 'https://talents-valley.herokuapp.com/api/user/password/forgot'
const Forgot = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm(
        {
            resolver: yupResolver(forgot),
        }
    );
    //const onSubmit = data => console.log(data);

    const handelForgot = (data) => {
        fetch(baseURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: data.email,
            }),
        })
            .then(response => response.json())
            .then(res => navigate('/emailCode',{state:{id:res.data._id}}))
    }

    return (
        <Container style={{ height: '821px' }}>
            <Logo />
            <Title>Forgot Password?</Title>
            <Main>
                <p>We'll send a code to your email to reset your password</p>
                <div className='form'>
                    <form onSubmit={handleSubmit(handelForgot)}>
                        <Input placeholder='email@gmail.com' register={register} value="Email" name="email" type="email" />
                        {errors.email && <p className='error'>{errors.email.message}</p>}
                        <Button value="Send Code " type='submit' />
                    </form>
                </div>
            </Main>
        </Container>
    )
}

export default Forgot