import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { forgot } from '../../utils/Validation/yup';
//components
import Logo from '../Logo/Logo';
import Input from '../../hooks/HookForm/Input/Input';
import Button from '../../hooks/HookForm/Button/Button';
//style
import { Container, Title } from '../../pages/Login/LoginStyle';
import { Main } from './ForgotStyle';
//constant
const Forgot = () => {
    const { register, handleSubmit, formState: { errors } } = useForm(
        {
            resolver: yupResolver(forgot),
        }
    );
    const onSubmit = data => console.log(data);
    return (
        <Container style={{ height: '821px' }}>
            <Logo />
            <Title>Forgot Password?</Title>
            <Main>
                <p>We'll send a code to your email to reset your password</p>
                <div className='form'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input placeholder='email@gmail.com' register={register} value="Email" name="email" type="email" />
                        {errors.email && <p className='error'>{errors.email.message}</p>}
                        <Button value="Send Code " path='/EmailCode' />
                    </form>
                </div>
            </Main>
        </Container>
    )
}

export default Forgot