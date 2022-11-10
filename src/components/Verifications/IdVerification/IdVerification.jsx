import React from 'react'
import { useForm } from "react-hook-form";
import Header from '../../Header/Header'
import id from '../../../assets/images/id.png'
import Input from '../../../hooks/HookForm/Input/Input'
import Select from '../../../hooks/HookForm/Select/Select';
//style
import { Container } from '../../../pages/Login/LoginStyle'
import { Title } from '../../../pages/Verification/VerificationStyle'
import { Main, Upload } from './IdVerifivcationStyle'
import { ButtonStyle } from '../../../hooks/HookForm/Button/style'
const mystyle = {
    height: '821px',
    margin: '65px auto 58px',
    padding: '32px 102px 88px 101px'
}
const IdVerification = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <>
            <Header />
            <Container style={mystyle}>
                <Main>
                    <Title>ID Verification</Title>
                    <img src={id} alt='emailImg' />
                    <p>Upload Document that Proof your Identity such as: Identity Card, Passport, Driver License</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Select register={register} title='Document Type' name='document' option1='Identity Card' option2='Passport' option3='Driver License' />
                        <Input register={register} placeholder='Enter your ID number' type='text' name='id' value='ID Number' />
                        <Upload>
                            <input type="file" {...register("file")} id='fileUpload' style={{ display: 'none' }} />
                            <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 20 20">
                                <path d="M17 12v5H3v-5H1v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5z" />
                                <path d="M15 7l-5-6-5 6h4v8h2V7h4z" />
                            </svg>
                            <label htmlFor='fileUpload' style={{ cursor: 'pointer' }}>
                                Upload a File
                            </label>
                        </Upload >
                        <ButtonStyle >Continue</ButtonStyle>
                    </form>
                </Main>
            </Container>
        </>
    )
}

export default IdVerification