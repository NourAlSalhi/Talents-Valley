import React from 'react'
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";
import PhoneInput from 'react-phone-input-2'
//components
import Logo from '../../components/Logo/Logo';
import Input from '../../hooks/HookForm/Input/Input';
import Password from '../../hooks/HookForm/Password/Password';
import Button from '../../hooks/HookForm/Button/Button';
//validation
import { yupResolver } from '@hookform/resolvers/yup';
import { registerAccountSchema } from '../../utils/Validation/yup';
//style
import { Container,Title,FooterSign } from '../Login/LoginStyle';
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
    const [phone, setPhone] = React.useState()
    //hook
    const { register, control, handleSubmit, formState: { errors } } = useForm(
        {
            resolver: yupResolver(registerAccountSchema),
        }
    );
    //function
    const submit = data => console.log(data);

    // const handelSubmit = (data) => {
    //     axios
    //         .post(baseURL, {
    //             firstName: data.firstName,
    //             lastName: data.lastName,
    //             email: data.email,
    //             mobile: data.phoneNumber,
    //             password: data.newPassword,
    //             country: data.cuntry,

    //         })
    //         .then(res => console.log(res))
    //         .catch(err => console.log(err));
    // }

    return (
        <Container style={style}>
            <Main>
            <Logo />
            <Title style={{margin: '38px 0 34px 0'}}>Create Your Account</Title>
            <div className='form'>
                <form onSubmit={handleSubmit(submit)}>
                    <div className='fullName'>
                        <div className='firstName inputName'>
                            <Label>First Name</Label>
                            <input placeholder='Enter first name ' type="text" {...register("firstName")} />
                            {errors.firstName && <p className='error' style={{color: 'red'}}>{errors.firstName.message}</p>}
                        </div>
                        <div className='lastName inputName'>
                            <Label>Last Name</Label>
                            <input placeholder='Enter last name ' type="text" {...register("lastName")} />
                            {errors.lastName && <p className='error' style={{color: 'red'}}>{errors.lastName.message}</p>}
                        </div>
                    </div>
                    <Input placeholder='email@gmail.com' register={register} value="Email" name="email" type="email" />
                    {errors.email && <p className='error' style={{color: 'red'}}>{errors.email.message}</p>}
                    <Password label="Password" register={register} name='newPassword' />
                    {errors.newPassword && <p style={{ color: "red" }}> {errors.newPassword.message} </p>}
                    {/* {errors.newPassword && errors.newPassword.type === "required" && (
                        <p style={{ color: "green" }}> 'Nice work. This is an excellent password'</p>
                    )} */}
                    {/* {errors.newPassword && errors.newPassword.type === "required" && (
                        <p>Your input is required</p>
                    )} */}
                    <div className='phoneInput'>
                        <Label>Phone Number</Label>
                        <Controller
                            name="mobile"
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <PhoneInput
                                    className='react-tel-input'
                                    value={value}
                                    onChange={onChange}
                                />
                            )}
                        />
                    </div>
                    {/* {errors.phoneNumber && <p className='error' style={{color: 'red'}}>{errors.phoneNumber.message}</p>} */}
                    <div className='logInput'>
                        <Label>Cuntry</Label>
                        <select  {...register("cuntry")}>
                            <option value=""></option>
                            <option value="UAE">UAE</option>
                            <option value="Germany">Germany</option>
                            <option value="Turkey">Turkey</option>
                        </select>
                        {errors.cuntry && <p className='error' style={{color: 'red'}}>{errors.cuntry.message}</p>}
                    </div>
                    <Button className="btnSignUp" value="Sign Up " path="/" />
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