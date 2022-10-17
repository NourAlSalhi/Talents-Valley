import React from 'react'
import { useForm } from "react-hook-form";
import Password from '../../hooks/HookForm/Password';
//img
import logo from "../../assets/images/logo.png"
//style
import "./login.css"

const Login = () => {
    const {  register,handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='mainLog'>
            <div className='headLog'>
                <img src={logo} alt='logo' />
                <h3>Talents Valley</h3>
            </div>
            <h4>Login to Your Account</h4>
            <div className='formLog'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='logInput input2'>
                        <label className='logLabel'>Email</label>
                        <input {...register("email")} />
                    </div>
                    <Password />
                    <input type="submit" value="Sign In" />
                </form>
                <div className='logAccount'>
                    <p>Don't have an account?</p>
                </div>
            </div>
        </div>
    )
}

export default Login