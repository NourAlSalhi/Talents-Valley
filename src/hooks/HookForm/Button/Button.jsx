import React from 'react'
import {Link} from 'react-router-dom'
//stule
import "./Button.css"
const Button = (props) => {
  return (
    <div className='btnClick'>
          <button type={props.type} > <Link className='btn' to={props.path}>{props.value}</Link></button>
    </div>
  )
}

export default Button