import React from 'react'
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
//style
import './password.css'
// constant
const eye = <FontAwesomeIcon icon={faEye} />;

const Password = (props) => {
  //hook
  const { register } = useForm();
  //state
  const [passwordShow, setPasswordShow] = useState(false);
  //functions
  const PasswordVisiblity = () => {
    setPasswordShow(passwordShow ? false : true);
  };

  return (
    <div className='logInput '>
      <label className='logLabel'>{props.label}</label>
      <div className='password'>
        <input
          name={props.name}
          type={passwordShow ? "text" : "password"} {...props.register(props.name)}
        />
        <i onClick={PasswordVisiblity}>{eye}</i>
      </div>
    </div>
  )
}

export default Password