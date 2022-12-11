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
import { Label } from '../../../hooks/HookForm/Input/style';
import { Main, Upload, UploadFill } from './IdVerifivcationStyle'
import { ButtonStyle } from '../../../hooks/HookForm/Button/style'
import { useState } from 'react';
const mystyle = { height: '821px', margin: '65px auto 58px', padding: '32px 102px 88px 101px' }
const IdVerification = () => {
    const navigate = useNavigate()
    const [err, setErr] = useState()
    const { register, handleSubmit, watch, formState: { errors } } = useForm(
        {
            resolver: yupResolver(verifiyId),
        }
    );
    const close = !watch('file') || watch('file').length === 0;
    //function
    const handelClick = () => {
        return close
    }
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
                    // userProfile()
                    navigate('/verification')
                 
                }
                //navigate('/verification')
            })
            .catch((error) => console.log('error', error));
    }
    // const userProfile = () => {
    //     fetch('https://talents-valley-backend.herokuapp.com/api/settings/profile', {
    //         method: 'GET',
    //         headers: {
    //           'Content-Type': 'application/json',
    //           Authorization: `Bearer ${localStorage.getItem('token')}`,
    //         }
    //       })
    //         .then((response) => response.json())
    //         .then(data => {
    //           localStorage.setItem("user", JSON.stringify(data.data))
    //         })
    //         .catch((error) => console.log('error', error));
    // }

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
                        {errors.Select && <span className='error'>{errors.Select.message}</span>}
                        <Input register={register} placeholder='Enter your ID number' type='text' name='id' value='ID Number' />
                        {/* {errors.id && <span >{errors.id.message}</span>} */}
                        {!watch('file') || watch('file').length === 0 ? (
                            <Upload>
                                <input type="file" id="fileupload" {...register('file')} style={{ display: 'none' }} />
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20">
                                    <path d="M17 12v5H3v-5H1v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5z" />
                                    <path d="M15 7l-5-6-5 6h4v8h2V7h4z" />
                                </svg>
                                <label htmlFor="fileupload">Upload a File</label>
                                {errors.file && <p className="error">{errors.file.message}</p>}
                            </Upload>
                        ) : (
                            <UploadFill>
                                <input type="file" id="fileupload" {...register('file')} style={{ display: 'none' }} />
                                <Label htmlFor="fileupload" style={{ position: "relative" }}>
                                    <div style={{ position: "absolute", marginLeft: '60px' }}>
                                        <p style={{ color: 'black', fontSize: '18px' }}>{watch('file')[0].name}</p>
                                        <p style={{ color: 'black', fontSize: '12px', fontWeight: '400', marginTop: '2px' }}>{(watch('file')[0].size / 1000000).toFixed(2) + 'Mb size'}</p>
                                    </div>
                                </Label>
                                <div className='icons'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 20 20" style={{ margin: '8px 17px' }}>
                                        <path d="M17 12v5H3v-5H1v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5z" />
                                        <path d="M15 7l-5-6-5 6h4v8h2V7h4z" />
                                    </svg>
                                    <button style={{ background: 'none', border: 'none' }} onClick={handelClick}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" style={{ marginTop: '10px' }}
                                            preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275q-.425 0-.7-.275q-.275-.275-.275-.7q0-.425.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7q0-.425.275-.7q.275-.275.7-.275q.425 0 .7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275q.425 0 .7.275q.275.275.275.7q0 .425-.275.7L13.4 12l4.9 4.9q.275.275.275.7q0 .425-.275.7q-.275.275-.7.275q-.425 0-.7-.275Z" /></svg>
                                    </button>
                                </div>
                                {errors.file && <div className="errors" style={{ color: "red", paddingTop: "20px" }}>{errors.file.message}</div>}
                            </UploadFill>
                        )}
                        <span style={{ color: 'red' }}>{err}</span>
                        <ButtonStyle >Continue</ButtonStyle>
                    </form>
                </Main>
            </Container>
        </>
    )
}

export default IdVerification