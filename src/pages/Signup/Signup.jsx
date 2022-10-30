import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { registerAccountSchema } from '../../utils/Validation/yup';
import axios from "axios";
//components
import Logo from '../../components/Logo/Logo';
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
    const [user, setUser] = useState()
    //hook
    const { register, control, handleSubmit, formState: { errors } } = useForm(
        {
            resolver: yupResolver(registerAccountSchema),
        }
    );
    //function
    const submit = data => console.log(data);

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
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                mobile: data.mobile,
                password: data.newPassword,
                country: data.country,
            }),
        })
            .then((response) => {
                console.log(response);
                if (response.status === 200) {
                    setUser(response.data)
                    console.log("sucess");
                } else {
                    console.log("error");
                }
                response.json()
                    .then((resp) => {
                        console.log(resp)
                        localStorage.setItem("token", JSON.stringify(resp.data));  //resp.data.accessToken
                    })
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
                                {errors.firstName && <p className='error' style={{ color: 'red' }}>{errors.firstName.message}</p>}
                            </div>
                            <div className='lastName inputName'>
                                <Label>Last Name</Label>
                                <input placeholder='Enter last name ' type="text" {...register("lastName")} />
                                {errors.lastName && <p className='error' style={{ color: 'red' }}>{errors.lastName.message}</p>}
                            </div>
                        </div>
                        <Input placeholder='email@gmail.com' register={register} value="Email" name="email" type="email" />
                        {errors.email && <p className='error' style={{ color: 'red' }}>{errors.email.message}</p>}
                        <Password label="Password" register={register} name='newPassword' />
                        {/* {errors.newPassword && <p style={{ color: "red" }}> req </p>} */}
                        {errors.newPassword && errors.newPassword.type === "matches" && (
                            <p style={{ color: "green" }}>week</p>
                        )}
                        {errors.newPassword && errors.newPassword?.type === "required" && (
                            <p>Your input is required</p>
                        )}
                        <div className='phoneInput'>
                            <Label>Phone Number</Label>
                            <PhoneInputWithCountry
                                international
                                defaultCountry="PS"
                                name='mobile'
                                control={control}
                                rules={{ required: true }}
                            />
                            {errors.mobile && <p className='error' style={{color: 'red'}}>{errors.mobile.message}</p>}
                        </div>
                        <div className='logInput'>
                            <Label>country</Label>
                            <select  {...register("country")}>
                                <option value=""></option>
                                <option value="UAE">UAE</option>
                                <option value="Germany">Germany</option>
                                <option value="Turkey">Turkey</option>
                            </select>
                            {errors.country && <p className='error' style={{ color: 'red' }}>{errors.country.message}</p>}
                        </div>
                        <Button value="Sign Up" type='submit'/>
                        <FooterSign>
                            <p>Already have an account?<span><Link className='sign' to="/">Sign in</Link></span></p>
                        </FooterSign>
                    </form>
                </div>
            </Main>
        </Container>
    )
}

export default Signup