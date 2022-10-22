import React from 'react'
//style
import './Input.css'

const Input = (props) => {
    return (
        <div className='logInput'>
            <label className='logLabel'>{props.value}</label>
            <input
                placeholder={props.placeholder}
                type={props.type}
                name={props.name}
                {...props.register(props.name)} />
        </div>
    )
}

export default Input