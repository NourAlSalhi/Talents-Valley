import React from 'react'
import { useForm } from 'react-hook-form'


//style
import './Input.css'
const Input = (props) => {
    const { register} = useForm();
    return (
        <div className='logInput'>
            <label className='logLabel'>{props.value}</label>
            <input placeholder={props.placeholder} type={props.type} name={props.name} {...register(props.name)} />
        </div>
    )
}

export default Input