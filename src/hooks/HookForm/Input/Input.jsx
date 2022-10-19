import React from 'react'
import { useForm } from 'react-hook-form'
//style
import './Input.css'
const Input = (props) => {
    const { register } = useForm();
    return (
        <div className='logInput'>
            <label className='logLabel'>{props.value}</label>
            <input type={props.type} {...register(props.name, props.validation)} />
        </div>
    )
}

export default Input