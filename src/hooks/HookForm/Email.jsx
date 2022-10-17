import React from 'react'
import { useForm } from "react-hook-form";

const Email = () => {
    const { register } = useForm();
    return (
        <div className='logInput'>
            <label className='logLabel'>Email</label>
            <input type="email" placeholder="email@gmail.com" {...register("email")} />
        </div>
    )
}

export default Email