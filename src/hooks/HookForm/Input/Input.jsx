import React from 'react'
//style
import { Label,InputStyle } from './style'

const Input = (props) => {

    const errStyle = {
        border:' 1px solid red'
        };
    return (
        <div style={{marginTop:'35px'}}>
            <Label className='logLabel'>{props.value}</Label>
            <InputStyle
                style={props.err && errStyle }
                placeholder={props.placeholder}
                type={props.type}
                name={props.name}
                {...props.register(props.name)} />
        </div>
    )
}

export default Input