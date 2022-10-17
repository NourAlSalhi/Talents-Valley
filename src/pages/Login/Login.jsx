import React from 'react'
import { useForm } from "react-hook-form";
//img
import logo from "../../assets/images/logo.png"
import Email from '../../hooks/HookForm/Email';
import Password from '../../hooks/HookForm/Password';
//style
import "./login.css"
const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='main mainLog'>
            <div className='headLog'>
                <img src={logo} alt='logo' />
                <h3>Talents Valley</h3>
            </div>
            <h4>Login to Your Account</h4>
            <div className='form'>
                <form onSubmit={handleSubmit(onSubmit)}>
                   <Email/>
                   <Password/>
                    <input type="submit" value="Sign In "/>
                </form>
                <div className='logAccount'>
                    <p>Don't have an account?</p>
                </div>
            </div>
        </div>
    )
}

export default Login