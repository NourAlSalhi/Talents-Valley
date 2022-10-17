import React from 'react'
import { useForm } from "react-hook-form";

const Email = () => {
    const { register } = useForm();
    const styleInput = {
        width: '500px',
        height: '50px',
        padding: "10px",
      };
    return (
        <div className='logInput'>
            <label className='logLabel'>Email</label>
            <input style={styleInput} type='email' {...register("email")} />
        </div>
    )
}

export default Email