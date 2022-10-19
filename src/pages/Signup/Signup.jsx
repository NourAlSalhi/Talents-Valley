import React from 'react'
import { useForm } from "react-hook-form";
import Logo from '../../components/Logo/Logo';
import Email from '../../hooks/HookForm/Email';
import Password from '../../hooks/HookForm/Password/Password';
import Button from '../../hooks/HookForm/Button/Button';
import { Link } from "react-router-dom";
//style
import "./signup.css"

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className=' main mainSign'>
            <Logo />
            <h4>Create Your Account</h4>
            <div className='form'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='fullName'>
                        <div className='firstName inputName'>
                            <label className='logLabel'>First Name</label>
                            <input placeholder='Enter first name ' type="text" {...register("First Name")} />
                        </div>
                        <div className='lastName inputName'>
                            <label className='logLabel'>Last Name</label>
                            <input placeholder='Enter last name ' type="text" {...register("First Name")} />
                        </div>
                    </div>
                    <Email />
                    <Password />
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
                        <p>Already have an account?<span><Link className='signin' to="/">Sign in</Link></span></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup