import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { registerAccountSchema } from '../../utils/Validation/yup';
import { useNavigate } from "react-router-dom";
import { getCountries } from 'react-phone-number-input/input'
import en from 'react-phone-number-input/locale/en.json'
import axios from "axios";
//components
import Logo from '../../components/login&Signup/Logo/Logo';
import Input from '../../hooks/HookForm/Input/Input';
import Password from '../../hooks/HookForm/Password/Password';
import Button from '../../hooks/HookForm/Button/Button';
//style
import { Container, Title, FooterSign } from '../Login/LoginStyle';
import { Main } from './SignupStyle';
import { Label } from '../../hooks/HookForm/Input/style';
import 'react-phone-input-2/lib/style.css'
//constant
const baseURL = "https://talents-valley.herokuapp.com/api/user/signup";
const style = {
    height: 'auto',
    margin: '66px auto 0px',
    padding: '0px 102px 47px 101px'
}
const Signup = () => {
    //state
    const [country, setCountry] = useState();
    const navigate = useNavigate();
    const [error, setError] = useState('');
    //hook
    const { register, control, handleSubmit, formState: { errors } } = useForm(
        {
            resolver: yupResolver(registerAccountSchema),
        }
    );
    //function
    // const submit = data => console.log(data);

    // const handelSubmit = (dataUser) => {
    //     axios
    //         .post(baseURL, {
    //             firstName: dataUser.firstName,
    //             lastName: dataUser.lastName,
    //             email: dataUser.email,
    //             mobile: dataUser.mobile,
    //             password: dataUser.newPassword,
    //             country: dataUser.country,
    //         })
    //         .then(response => response.data)
    //         .catch(err => console.log(err.response));
    // }

    const handelSignup = (data) => {
        fetch(baseURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                mobile: data.mobile,
                password: data.newPassword,
                country: data.country,
            }),
        })
            .then((response) => response.json())
            .then((result) => {
                localStorage.setItem("token", JSON.stringify(result.data.accessToken));
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <Container style={style}>
            <Main>
                <Logo />
                <Title style={{ margin: '38px 0 34px 0' }}>Create Your Account</Title>
                <div className='form'>
                    <form onSubmit={handleSubmit(handelSignup)}>
                        <div className='fullName'>
                            <div className='firstName inputName'>
                                <Label>First Name</Label>
                                <input placeholder='Enter first name ' type="text" {...register("firstName")} />
                                {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName.message}</p>}
                            </div>
                            <div className='lastName inputName'>
                                <Label>Last Name</Label>
                                <input placeholder='Enter last name ' type="text" {...register("lastName")} />
                                {errors.lastName && <p style={{ color: 'red' }}>{errors.lastName.message}</p>}
                            </div>
                        </div>
                        <Input placeholder='email@gmail.com' register={register} value="Email" name="email" type="email" />
                        {errors.email && <p className='error' style={{ color: 'red' }}>{errors.email.message}</p>}
                        <Password label="Password" register={register} name='newPassword' />
                        {errors.newPassword && <p style={{ color: 'red' }}>{errors.newPassword.message}</p>}
                        {/* {errors.newPassword && errors.newPassword.type === "matches" && (
                            <p style={{ color: "red" }}>Password should be at least 8 characters long.</p>
                        )}
                        {errors.newPassword && errors.newPassword.type === "required" && (
                            <p style={{ color: "red" }}> Password should be at least 8 characters long.</p>
                        )} */}
                        <div className='logInput'>
                            <Label>Phone Number</Label>
                            <PhoneInputWithCountry
                                international
                                defaultCountry="PS"
                                name='mobile'
                                control={control}
                                rules={{ required: true }}
                            />
                            {errors.mobile && <p style={{ color: 'red' }}>{errors.mobile.message}</p>}
                        </div>
                        <div className='logInput'>
                            <Label>Country</Label>
                            <select
                                {...register("country")}
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
                        <Button value="Sign Up" type='submit' />
                        <FooterSign>
                            <p>Already have an account?<span><Link className='sign' to="/">Sign in</Link></span></p>
                        </FooterSign>
                        <p>{error}</p>
                    </form>
                </div>
            </Main>
        </Container>
    )
}

export default Signup