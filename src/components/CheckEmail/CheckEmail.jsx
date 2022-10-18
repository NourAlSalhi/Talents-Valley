import React from 'react'
import { useForm } from "react-hook-form";
import Button from '../../hooks/HookForm/Button';
import Logo from '../Logo/Logo';
//style
import "./CheckEmail.css"

const CheckEmail = () => {
    const { handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='main mainLog'>
            <Logo />
            <h4>Check Your Email</h4>
            <p>We have sent you an email that contains a code to
                reset your password</p>
            <div className='form'>
                <div className='number'></div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Button value="Continue " />
                </form>

            </div>
        </div>
    )
}

export default CheckEmail