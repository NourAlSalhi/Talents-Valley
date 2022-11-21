import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { registerAccountSchema } from '../../utils/Validation/yup';
import { getCountries } from 'react-phone-number-input/input'
import en from 'react-phone-number-input/locale/en.json'
//components
import Logo from '../../components/login&Signup/Logo/Logo';
import Input from '../../hooks/HookForm/Input/Input';
import Password from '../../hooks/HookForm/Password/Password';
import Button from '../../hooks/HookForm/Button/Button';
//style
import { Container, Title, FooterSign } from '../Login/LoginStyle';
import { Main } from './SignupStyle';
import { Label } from '../../hooks/HookForm/Input/style';
import "react-phone-number-input/style.css";
//constant
const baseURL = "https://talents-valley.herokuapp.com/api/user/signup";
const style = { height: 'auto', margin: '66px auto 0px', padding: '0px 102px 47px 101px' }
const visiStyle={visibility: 'hidden'}
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
                localStorage.setItem("token", result.data.accessToken);
                localStorage.setItem("emial", result.data.user.email);
                localStorage.setItem("mobile", result.data.user.mobile);
                navigate('/verification');
            })
            .catch((error) => {
                console.log(error);
            });
    }
    const errPass = errors.newPassword && errors.newPassword.message
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
                                {/* {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName.message}</p>} */}
                            </div>
                            <div className='lastName inputName'>
                                <Label>Last Name</Label>
                                <input placeholder='Enter last name ' type="text" {...register("lastName")} />
                                {/* {errors.lastName && <p style={{ color: 'red' }}>{errors.lastName.message}</p>} */}
                            </div>
                        </div>
                        <Input placeholder='email@gmail.com' register={register} value="Email" name="email" type="email" />
                        {/* {errors.email && <p className='error' style={{ color: 'red' }}>{errors.email.message}</p>} */}
                        <Password label="Password" register={register} name='newPassword' />
                        {errPass ? <span style={{ color: 'red' }}>{errPass}</span> : <span style={visiStyle}>error</span>}
                        {/* {errors.newPassword && <p style={{ color: 'red' }}>{errors.newPassword.message}</p>} */}
                        {/* {errors.newPassword && errors.newPassword.type === "matches" && (
                            <p style={{ color: "red" }}>Password should be at least 8 characters long.</p>
                        )}
                        {errors.newPassword && errors.newPassword.type === "required" && (
                            <p style={{ color: "red" }}> Password should be at least 8 characters long.</p>
                        )} */}
                        <div style={{marginTop:'15px'}}>
                            <Label>Phone Number</Label>
                            <PhoneInputWithCountry
                                international
                                defaultCountry="PS"
                                name='mobile'
                                control={control}
                            />
                            {/* {errors.mobile && <p style={{ color: 'red' }}>{errors.mobile.message}</p>} */}
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
                            {/* {errors.country && <p style={{ color: 'red' }}>{errors.country.message}</p>} */}
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