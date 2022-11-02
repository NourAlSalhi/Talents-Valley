import React from 'react'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
//components
import Button from '../../hooks/HookForm/Button/Button';
import Logo from '../Logo/Logo';
//style
import { Container, FooterSign, Title } from '../../pages/Login/LoginStyle';
import { Main } from './EmailStyle';
//constant
const EmailCode = () => {
    //state
    const { register, handleSubmit, formState: { errors } } = useForm();
    //function
    const onSubmit = data => console.log(data);
    

    return (
        <Container style={{ height: '821px', }}>
            <Logo />
            <Title>Check Your Email</Title>
            <Main>
                <p className='para'>We have sent you an email that contains a code to
                    reset your password</p>
                <div className='form'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='codeNum'><input className='number' {...register("code1")} /> </div>
                        <div className='codeNum'><input className='number' {...register("code2")} /> </div>
                        <div className='codeNum'><input className='number' {...register("code3")} /> </div>
                        <div className='codeNum'><input className='number' {...register("code4")} /> </div>
                        <div className='codeNum'><input className='number' {...register("code5")} /> </div>
                        <div className='codeNum'><input className='number' {...register("code6")} /> </div>
                        <Button value="Continue " type='submit'/>
                        <FooterSign>
                            <p>Didn't get the code?<span><Link className='sign' to="/emailCode">Resend</Link></span> </p>
                        </FooterSign>
                    </form>
                </div>
            </Main>
        </Container>
    )
}

export default EmailCode