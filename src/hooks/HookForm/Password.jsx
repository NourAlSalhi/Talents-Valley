import React from 'react'
import { useForm } from "react-hook-form";

const Password = () => {
  const { register } = useForm();
  return (
    <div className='logInput input2'>
      <label className='logLabel'>Password</label>
      <input type="password" {...register("password")} />
    </div>
  )
}

export default Password