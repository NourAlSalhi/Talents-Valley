import React from 'react'
import { useForm } from "react-hook-form";
import Logo from '../../components/Logo/Logo';
import Input from '../../hooks/HookForm/Input/Input';
import Password from '../../hooks/HookForm/Password/Password';
import Button from '../../hooks/HookForm/Button/Button';
import { Link } from "react-router-dom";
//style
import "./login.css"
const Login = () => {
    //state
    const { handleSubmit, formState: { errors } } = useForm();
    //function
    const onSubmit = data => console.log(data);

    return (
        <div className='main mainLogin'>
            <Logo />
            <h4>Login to Your Account</h4>
            <div className='form'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input value="Email" name="email" type="email" />
                    <Password label="Password"/>
                    <Link className='forget' to="/forgot">Forgot Password?</Link>
                    <Button value='Sign In ' path="/" />
                </form>
                <div className='logAccount'>
                    <p>Don't have an account?<span><Link className='sign' to="/signup">Sign up</Link></span> </p>
                </div>
            </div>
        </div>
    )
}

export default Login