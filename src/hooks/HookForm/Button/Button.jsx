import React from 'react'
import {Link} from 'react-router-dom'
//stule
import { Contanier } from './style'
const Button = (props) => {
  return (
    <Contanier>
          <button type={props.type} htmlFor="btn"> <Link className='btn' id='btn'  to={props.path}>{props.value}</Link></button>
    </Contanier>
  )
}

export default Button