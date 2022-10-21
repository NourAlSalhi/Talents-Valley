import React from 'react'
import { useForm } from "react-hook-form";
import Logo from '../../components/Logo/Logo';
import Input from '../../hooks/HookForm/Input/Input';
import Password from '../../hooks/HookForm/Password/Password';
import Button from '../../hooks/HookForm/Button/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerAccountSchema } from '../../utils/Validation/yup';
import { Link } from "react-router-dom";
//style
import "./signup.css"

const Signup = () => {
    //hook
    const { register, handleSubmit, formState: { errors } } = useForm(
        {
            resolver: yupResolver(registerAccountSchema),
        }
    );
    //function
    const submit = data => console.log(data);
    // const onSubmit = data => console.log(data);
    return (
        <div className=' main mainSign'>
            <Logo />
            <h4>Create Your Account</h4>
            <div className='form'>
                <form onSubmit={handleSubmit(submit)}>
                    <div className='fullName'>
                        <div className='firstName inputName'>
                            <label className='logLabel'>First Name</label>
                            <input placeholder='Enter first name ' type="text" {...register("firstName")} />
                        </div>
                        <div className='lastName inputName'>
                            <label className='logLabel'>Last Name</label>
                            <input placeholder='Enter last name ' type="text" {...register("lastName")} />
                        </div>
                    </div>
                    <Input placeholder='email@gmail.com' value="Email" name="email" type="email" />
                    <p className='error'>{errors.email?.message}</p>
                    <Password label="Password" name='newPassword' />
                    {errors.newPassword && <p className='error'>{errors.newPassword.message}</p>}
                    <div className='logInput'>
                        <label className='logLabel'>Cuntry</label>
                        <select  {...register("gender")}>
                            <option value=""></option>
                            <option value="UAE">UAE</option>
                            <option value="Germany">Germany</option>
                            <option value="Turkey">Turkey</option>
                        </select>
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