import React from 'react'
import { useForm } from "react-hook-form";
import Logo from '../../components/Logo/Logo';
import Email from '../../hooks/HookForm/Email';
import Password from '../../hooks/HookForm/Password';
import Button from '../../hooks/HookForm/Button';
//style
import "./login.css"

const Login = () => {
    const {handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='main mainLog'>
            <Logo />
            <h4>Login to Your Account</h4>
            <div className='form'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Email />
                    <Password />
                    <Button value='Sign In ' />
                </form>
                <div className='logAccount'>
                    <p>Don't have an account?</p>
                </div>
            </div>
        </div>
    )
}

export default Login