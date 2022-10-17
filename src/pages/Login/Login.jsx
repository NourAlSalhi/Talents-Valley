import React from 'react'
import { useForm, Controller } from "react-hook-form";
import TextField from '@mui/material/TextField';
//img
import logo from "../../assets/images/logo.png"
//style
import "./login.css"
const Login = () => {
    const { handleSubmit, control } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='mainLog'>
            <div className='headLog'>
                <img src={logo} alt='logo' />
                <h3>Talents Valley</h3>
            </div>
            <h4>Login to Your Account</h4>
            <div className='formLog'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='logInput'>
                        <label className='logLabel'>Email</label>
                        <Controller
                            name="email"
                            control={control}
                            rules={{ required: 'First name required' }}
                            render={({ field }) => (
                                <TextField
                                    type="email"
                                    placeholder='email@gmail.com'
                                    variant="outlined"
                                    sx={{ width: '500px' }}
                                />
                            )}
                        />
                    </div>
                    <div className='logInput input2'>
                        <label className='logLabel'>Password</label>
                        <Controller
                            name="password"
                            control={control}
                            rules={{ required: 'First name required' }}
                            render={({ field: { onChange, value } }) => (
                                <TextField
                                    type="password"
                                    variant="outlined"
                                    sx={{ width: '500px' }}
                                />
                            )}
                        />
                    </div>
                    <input type="submit" value="Sign In" />
                </form>
                <div className='logAccount'>
                    <p>Don't have an account?</p>
                </div>
            </div>
        </div>
    )
}

export default Login