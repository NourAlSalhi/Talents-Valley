import React from 'react'
//style
import { Label,InputStyle } from './style'

const Input = (props) => {
    return (
        <div style={{marginTop:'35px'}}>
            <Label className='logLabel'>{props.value}</Label>
            <InputStyle
                placeholder={props.placeholder}
                type={props.type}
                name={props.name}
                {...props.register(props.name)} />
        </div>
    )
}

export default Input