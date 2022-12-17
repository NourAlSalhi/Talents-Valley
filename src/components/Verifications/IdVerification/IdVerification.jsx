import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { verifiyId } from '../../../utils/Validation/yup';
import id from '../../../assets/images/id.png'
//components
import Header from '../../Header/Header'
import Input from '../../../hooks/HookForm/Input/Input'
import Select from '../../../hooks/HookForm/Select/Select';
import File from '../../../hooks/HookForm/File/File';
//style
import { Container } from '../../../pages/Login/LoginStyle'
import { Title } from '../../../pages/Verification/VerificationStyle'
import { Main } from './IdVerifivcationStyle'
import { ButtonStyle } from '../../../hooks/HookForm/Button/style'
const mystyle = { height: '821px', margin: '65px auto 58px', padding: '32px 102px 88px 101px' }

const IdVerification = () => {
    const navigate = useNavigate()
    const [err, setErr] = useState()
    const { register, handleSubmit, resetField ,watch, formState: { errors } } = useForm(
        {
            resolver: yupResolver(verifiyId),
        }
    );
    const onSubmit = (data) => {
        const formData = new FormData()
        formData.append('file', data.file[0])
        formData.append('idNumber', data.id)
        formData.append('idDocumentType', data.document)
        fetch('https://talents-valley-backend.herokuapp.com/api/user/verify/id', {
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
                else if (result.statusCode < 400) {
                    userProfile()
                    navigate('/verification')
                }
            })
            .catch((error) => console.log('error', error));
    }
    const userProfile = () => {
        fetch('https://talents-valley-backend.herokuapp.com/api/settings/profile', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        })
            .then((response) => response.json())
            .then(data => {
                localStorage.setItem("user", JSON.stringify(data.data))
            })
            .catch((error) => console.log('error', error));
    }

    const onSubmit0 = (data) => {
        console.log(data)
    }

    return (
        <>
            <Header />
            <Container style={mystyle}>
                <Main>
                    <Title>ID Verification</Title>
                    <img src={id} alt='emailImg' />
                    <p className='para'>Upload Document that Proof your Identity such as: Identity Card, Passport, Driver License</p>
                    <form onSubmit={handleSubmit(onSubmit0)}>
                        <Select register={register} title='Document Type' name='document'
                            option1='driving_license'
                            option2='passport'
                            option3='national_id ' />
                        {errors?.select && <span className='error'>{errors.select.message}</span>}
                        <Input register={register} placeholder='Enter your ID number'
                            type='text' name='id' value='ID Number' />
                        {errors.id && <span className='error'>{errors.id.message}</span>}
                        <File watch={watch} register={register} errors={errors} resetField={resetField} />
                        <span style={{ color: 'red' }}>{err}</span>
                        {/* <ButtonStyle onClick={userProfile} >Continue</ButtonStyle> */}
                        <ButtonStyle>Continue</ButtonStyle>
                    </form>
                </Main>
            </Container>
        </>
    )
}

export default IdVerification