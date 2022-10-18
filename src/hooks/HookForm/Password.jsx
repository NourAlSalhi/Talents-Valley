import React from 'react'
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const eye = <FontAwesomeIcon icon={faEye} />;

const Password = () => {
  const { register } = useForm();
//state
  const [passwordShow, setPasswordShow] = useState(false);
  //function
  const PasswordVisiblity = () => {
    setPasswordShow (passwordShow ? false : true);
  };
  return (
    <div className='logInput input2 password'>
      <label className='logLabel'>Password</label>
      <input
        name='password'
        type={passwordShow ? "text" : "password"} {...register("password", {min: 8}
        )} />
      <i onClick={PasswordVisiblity}>{eye}</i>
    </div>
  )
}

export default Password