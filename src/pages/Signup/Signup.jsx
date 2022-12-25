import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { registerAccountSchema } from '../../utils/Validation/yup';
import { getCountries } from 'react-phone-number-input/input'
import en from 'react-phone-number-input/locale/en.json'
import {basedUrl} from '../../apis/verifiy';
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
const style = { height: 'auto', margin: '66px auto 0px', padding: '0px 102px 47px 101px' }
const visiStyle = { visibility: 'hidden' }
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
        fetch(`${basedUrl}user/signup"`, {
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
                localStorage.setItem("user", JSON.stringify(result.data.user));
                navigate('/verification');
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
                                {/* {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName.message}</p>} */}
                            </div>
                            <div className='lastName inputName'>
                                <Label>Last Name</Label>
                                <input placeholder='Enter last name ' type="text" {...register("lastName")} />
                            </div>
                        </div>
                        <Input placeholder='email@gmail.com' register={register} value="Email" name="email" type="email" />
                        <Password label="Password" register={register} name='newPassword' />
                        <span style={visiStyle}>error</span>
                        {errors.newPassword && errors.newPassword.type === "matches" && (
                            <p style={{ color: "red", marginTop: '-20px' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '4px' }} width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M12.884 2.532c-.346-.654-1.422-.654-1.768 0l-9 17A.999.999 0 0 0 3 21h18a.998.998 0 0 0 .883-1.467L12.884 2.532zM13 18h-2v-2h2v2zm-2-4V9h2l.001 5H11z" /></svg>
                                Your password is weak
                            </p>
                        )}
                        {errors.newPassword && errors.newPassword.type === "required" && (
                            <p style={{ color: "red", marginTop: '-20px' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '4px' }} width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M12.884 2.532c-.346-.654-1.422-.654-1.768 0l-9 17A.999.999 0 0 0 3 21h18a.998.998 0 0 0 .883-1.467L12.884 2.532zM13 18h-2v-2h2v2zm-2-4V9h2l.001 5H11z" /></svg>
                                this field must be password
                            </p>
                        )}
                        <div style={{ marginTop: '15px' }}>
                            <Label>Phone Number</Label>
                            <PhoneInputWithCountry
                                international
                                defaultCountry="PS"
                                name='mobile'
                                control={control}
                            />
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
                            {errors.country && <p style={{ color: 'red' }}>{errors.country.message}</p>}
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