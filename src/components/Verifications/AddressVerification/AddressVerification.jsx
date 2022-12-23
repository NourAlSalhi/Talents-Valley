import React, { useState } from 'react'
import address from '../../../assets/images/address.png'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import Select from '../../../hooks/HookForm/Select/Select';
import File from '../../../hooks/HookForm/File/File';
import { getCountries } from 'react-phone-number-input/input'
import en from 'react-phone-number-input/locale/en.json'
//style
import { Container } from '../../../pages/Login/LoginStyle'
import { Title } from '../../../pages/Verification/VerificationStyle'
import { Main } from './AddressStyle'
import { Label } from '../../../hooks/HookForm/Input/style';
import Header from '../../Header/Header'
import { ButtonStyle } from '../../../hooks/HookForm/Button/style'

const myStyle = {
    height: '945px',
    margin: '65px auto',
    paddingTop: '32px',
}
const AddressVerification = () => {
    const navigate = useNavigate()
    const [err, setErr] = useState()
    const [country, setCountry] = useState();
    const { register, watch, resetField, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const formData = new FormData()
        formData.append('file', data.file[0])
        formData.append('address1', data.Address1)
        formData.append('address2', data.Address2)
        formData.append('city', data.city)
        formData.append('addressDocumentType', data.document)
        formData.append('country', data.country)
        formData.append('otherDocumentType', data.document)
        fetch('https://talents-valley-backend.herokuapp.com/api/user/verify/address', {
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
                navigate('/verification')
            })
            .catch((error) => console.log('error', error));
    }
    return (
        <>
            <Header />
            <Container style={myStyle}>
                <Main>
                    <Title>Address Verification</Title>
                    <img src={address} alt='emailImg' />
                    <p className='para'>Upload Document That Proof Your Address Such As: Bill (Phone, Electricity, Water, Bank Statement)</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Select register={register} title='Document Type' name='document' option1='water_bill' option2='phone_bill' option3='bank_statement' />
                        <div className='address'>
                            <div className='address1'>
                                <Label>Address 1</Label>
                                <input className='inputAddress' placeholder='Neighborhood ' type="text" {...register("Address1")} />
                            </div>
                            <div className='address2'>
                                <Label>Address 2</Label>
                                <input className='inputAddress' placeholder='Street ' type="text" {...register("Address2")} />
                            </div>
                        </div>
                        <div className='address'>
                            <div className='address1'>
                                <Label>City</Label>
                                <input className='inputAddress' placeholder='  ' type="text" {...register("city")} />
                            </div>
                            <div className='address2'>
                                <Label>Country</Label>
                                <select
                                    {...register("country")}
                                    className='country'
                                    value={country}
                                    onChange={event => setCountry(event.target.value || undefined)}>
                                    <option value="">
                                        {en['ZZ']}
                                    </option>
                                    {getCountries().map((country) => (
                                        <option key={country} value={country}>
                                            {en[country]}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <File watch={watch} register={register} errors={errors} />
                        <span style={{ color: 'red' }}>{err}</span>
                        <ButtonStyle onClick={userProfile}>Continue</ButtonStyle>
                    </form>
                </Main>
            </Container>
        </>
    )
}

export default AddressVerification