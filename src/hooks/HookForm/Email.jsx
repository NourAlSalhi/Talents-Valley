import React from 'react'
import { useForm } from "react-hook-form";

const Email = () => {
    const { register } = useForm();
    return (
        <div className='logInput'>
            <label className='logLabel'>Email</label>
            <input type="email" placeholder="email@gmail.com" {...register("email", {
                pattern: {
                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: 'Please enter a valid email',
                },
            })} />
        </div>
    )
}

export default Email