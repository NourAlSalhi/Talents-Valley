import React from 'react'
import { useForm } from "react-hook-form";
import Logo from '../../components/Logo/Logo';
import Input from '../../hooks/HookForm/Input/Input';
import Password from '../../hooks/HookForm/Password/Password';
import Button from '../../hooks/HookForm/Button/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerAccountSchema } from '../../utils/Validation/yup';
import { Link } from "react-router-dom";
import axios from "axios";
//style
import "./signup.css"
//constant
const baseURL = "https://talents-valley.herokuapp.com/api/user/signup";
const Signup = () => {
    //hook
    const { register, handleSubmit, formState: { errors } } = useForm(
        {
            resolver: yupResolver(registerAccountSchema),
        }
    );
    //function
    // const submit = data => console.log(data);

    const handelSubmit = (data) => {
        axios
            .post(baseURL, {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                mobile: data.phoneNumber,
                password: data.newPassword,
                country: data.cuntry,

            })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    return (
        <div className=' main mainSign'>
            <Logo />
            <h4>Create Your Account</h4>
            <div className='form'>
                <form onSubmit={handleSubmit(handelSubmit)}>
                    <div className='fullName'>
                        <div className='firstName inputName'>
                            <label className='logLabel'>First Name</label>
                            <input placeholder='Enter first name ' type="text" {...register("firstName")} />
                            {errors.firstName && <p className='error'>{errors.firstName.message}</p>}
                        </div>
                        <div className='lastName inputName'>
                            <label className='logLabel'>Last Name</label>
                            <input placeholder='Enter last name ' type="text" {...register("lastName")} />
                            {errors.lastName && <p className='error'>{errors.lastName.message}</p>}
                        </div>
                    </div>
                    <Input placeholder='email@gmail.com' register={register} value="Email" name="email" type="email" />
                    {errors.email && <p className='error'>{errors.email.message}</p>}
                    <Password label="Password" register={register} name='newPassword' />
                    {errors.newPassword && <p style={{ color: "red" }}> {errors.newPassword.message} </p>}
                    {/* {errors.newPassword && errors.newPassword.type === "max" && (
                        <p style={{ color: "green" }}> 'Nice work. This is an excellent password'</p>
                    )}
                    {errors.newPassword && errors.newPassword.type === "required" && (
                        <p>Your input is required</p>
                    )} */}
                    <Input register={register} value="Phone Number" name="phoneNumber" type="number" />
                    {errors.phoneNumber && <p className='error'>{errors.phoneNumber.message}</p>}
                    <div className='logInput'>
                        <label className='logLabel'>Cuntry</label>
                        <select  {...register("cuntry")}>
                            <option value=""></option>
                            <option value="UAE">UAE</option>
                            <option value="Germany">Germany</option>
                            <option value="Turkey">Turkey</option>
                        </select>
                        {errors.cuntry && <p className='error'>{errors.cuntry.message}</p>}
                    </div>
                    <Button className="btnSignUp" value="Sign Up " path="/" />
                    <div className='logAccount'>
                        <p>Already have an account?<span><Link className='sign' to="/">Sign in</Link></span></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup