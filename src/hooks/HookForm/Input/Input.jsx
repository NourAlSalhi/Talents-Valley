import React from 'react'
//style
import { Label,InputStyle } from './style'
const Input = (props) => {

    const errStyle = {
        border:' 1px solid #F50000'
        };
    return (
        <div style={{marginTop:'30px'}}>
            <Label className='logLabel'>{props.value}</Label>
            <InputStyle
                data-testid={props.test}
                style={props.err && errStyle }
                placeholder={props.placeholder}
                type={props.type}
                // name={props.name}
                {...props.register(props.name)} />
        </div>
    )
}

export default Input