import React from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { verifiyId } from '../../../utils/Validation/yup';
import id from '../../../assets/images/id.png'
//components
import Header from '../../Header/Header'
import Input from '../../../hooks/HookForm/Input/Input'
import Select from '../../../hooks/HookForm/Select/Select';
//style
import { Container } from '../../../pages/Login/LoginStyle'
import { Title } from '../../../pages/Verification/VerificationStyle'
import { Main, Upload } from './IdVerifivcationStyle'
import { ButtonStyle } from '../../../hooks/HookForm/Button/style'
import { useState } from 'react';
const mystyle = {
    height: '821px',
    margin: '65px auto 58px',
    padding: '32px 102px 88px 101px'
}
const IdVerification = () => {
    const navigate = useNavigate()
    const [err, setErr] = useState()
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(verifiyId),
    });
    //function
    const onSubmit = (data) => {
        const formData = new FormData()
        formData.append('file', data.file[0])
        formData.append('idNumber', data.id)
        formData.append('idDocumentType', data.document)
        fetch('https://talents-valley.herokuapp.com/api/user/verify/id', {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
            body: formData
        })
            .then((response) => response.json())
            .then(result => {
                if (result.statusCode >= 400)
                    setErr(result.message)
                else if (result.statusCode < 400)
                    navigate('/verification')
            })
            .catch((error) => console.log('error', error));
    }

    return (
        <>
            <Header />
            <Container style={mystyle}>
                <Main>
                    <Title>ID Verification</Title>
                    <img src={id} alt='emailImg' />
                    <p>Upload Document that Proof your Identity such as: Identity Card, Passport, Driver License</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Select register={register} title='Document Type' name='document' option1='driving_license' option2='passport' option3='national_id ' />
                        {errors.document && <span>{errors.document.message}</span>}
                        <Input register={register} placeholder='Enter your ID number' type='number' name='id' value='ID Number' />
                        {errors.id && <span>{errors.id.message}</span>}
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
                        {errors.file && <span>{errors.file.message}</span>}
                        <span style={{ color: 'red' }}>{err}</span>
                        <ButtonStyle >Continue</ButtonStyle>
                    </form>
                </Main>
            </Container>
        </>
    )
}

export default IdVerification