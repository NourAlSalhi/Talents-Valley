import React from 'react'
import logo from "../../assets/images/logo.png"
import { useForm } from "react-hook-form";
//style
import "./signup.css"
import Email from '../../hooks/HookForm/Email';
import Password from '../../hooks/HookForm/Password';
const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className=' main mainSign'>
            <div className='headLog'>
                <img src={logo} alt='logo' />
                <h3>Talents Valley</h3>
            </div>
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
                        <select {...register("gender")}>
                            <option value=""></option>
                            <option value="Palestine">Palestine</option>
                            <option value="Germany">Germany</option>
                            <option value="Turkey">Turkey</option>
                        </select>
                    </div>
                    <input type="submit" value="Sign Up " />
                    <div className='logAccount'>
                        <p>Already have an account?</p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup