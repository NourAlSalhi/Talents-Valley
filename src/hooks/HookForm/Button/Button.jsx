import React from 'react'
import {Link} from 'react-router-dom'
//stule
import { ButtonStyle } from './style'
const Button = (props) => {
  return (
          <ButtonStyle type={props.type} onClick={props.onClick}>{props.value}</ButtonStyle>
  )
}

export default Button