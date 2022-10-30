import React from 'react'
import {Link} from 'react-router-dom'
//stule
import { Contanier } from './style'
const Button = (props) => {
  return (
    <Contanier>
          <button type={props.type}>{props.value}</button>
    </Contanier>
  )
}

export default Button