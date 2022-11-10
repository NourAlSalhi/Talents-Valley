import React from 'react'
import { useForm } from "react-hook-form";
import Header from '../../Header/Header'
import id from '../../../assets/images/id.jpeg'
import Input from '../../../hooks/HookForm/Input/Input'
//style
import { Container } from '../../../pages/Login/LoginStyle'
import { Title } from '../../../pages/Verification/VerificationStyle'
import { Main } from './IdVerifivcationStyle'
import { Label } from '../../../hooks/HookForm/Input/style';
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
                        <div className='logInput'>
                        <Label>Document Type</Label>
                        <select {...register("Document")}>
                            <option value=" "> </option>
                            <option value="Identity Card">Identity Card</option>
                            <option value="Passport">Passport</option>
                            <option value="Driver License">Driver License</option>
                        </select>
                        </div>
                        <Input register={register} placeholder='Enter your ID number' type='text' name='id' value='ID Number'/>
                        <Input register={register} type='file' name='file' />
                    </form>
                </Main>
            </Container>
        </>
    )
}

export default IdVerification