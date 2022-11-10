import React from 'react'
import { Label } from '../Input/style'
//style
import { Container,SelectStyle } from './SelectStyle'
const Select = (props) => {
    return (
        <Container>
            <Label>{props.title}</Label>
            <SelectStyle  {...props.register(props.name)}>
                <option value=" "> </option>
                <option value={props.option1}>{props.option1}</option>
                <option value={props.option2}>{props.option2}</option>
                <option value={props.option3}>{props.option3}</option>
            </SelectStyle>
        </Container>
    )
}

export default Select