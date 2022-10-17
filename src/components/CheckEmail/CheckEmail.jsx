import React from 'react'
import { useForm } from "react-hook-form";
import Email from '../../hooks/HookForm/Email';
import logo from "../../assets/images/logo.png"

//style
import "./CheckEmail.css"
const CheckEmail = () => {
    const { handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='main mainLog'>
            <div className='headLog'>
                <img src={logo} alt='logo' />
                <h3>Talents Valley</h3>
            </div>
            <h4>Check Your Email</h4>
            <p>We have sent you an email that contains a code to
                reset your password</p>
            <div className='form'>
                <div className='number'></div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="submit" value="Continue " />
                </form>
                
            </div>
        </div>
    )
}

export default CheckEmail