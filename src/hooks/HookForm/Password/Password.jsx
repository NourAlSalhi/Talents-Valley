import React from 'react'
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
//style
import './password.css'
const eye = <FontAwesomeIcon icon={faEye} />;

const Password = (props) => {
  const { register } = useForm();
  //state
  const [passwordShow, setPasswordShow] = useState(false);
  //function
  const PasswordVisiblity = () => {
    setPasswordShow(passwordShow ? false : true);
  };
  return (
    <div className='logInput '>
      <label className='logLabel'>{props.label}</label>
      <div className='password'>
        <input
          name='password'
          type={passwordShow ? "text" : "password"} {...register("password", { min: 8 }
          )} />
        <i onClick={PasswordVisiblity}>{eye}</i>
      </div>
    </div>
  )
}

export default Password