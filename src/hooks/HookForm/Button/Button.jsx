import React from 'react'
import {Link} from 'react-router-dom'
//stule
import "./Button.css"
const Button = (props) => {
  return (
    <div className='btnClick'>
          <button type={props.type} htmlFor="btn"> <Link className='btn' id='btn'  to={props.path}>{props.value}</Link></button>
    </div>
  )
}

export default Button