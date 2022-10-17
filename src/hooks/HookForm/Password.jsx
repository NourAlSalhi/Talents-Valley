import React from 'react'
import { useForm, Controller } from "react-hook-form";
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Input from '@mui/material/Input';

const Password = () => {
    const { control } = useForm();
    //state
    const [values, setValues] = React.useState({
        password: "",
        showPassword: false,
      });
      //functions
      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
      
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
      
      const handlePasswordChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
      

    return (
        <div className='logInput input2'>
            <label className='logLabel'>Password</label>
            <Controller
                name="password"
                control={control}
                rules={{ required: 'First name required' }}
                render={({ field: { onChange, value } }) => (
                    <Input
                        className='password'
                        type={values.showPassword ? "text" : "password"}
                        variant="outlined"
                        sx={{ width: '500px' }}
                        onChange={handlePasswordChange("password")}
                        value={values.password}
                        endAdornment={
                          <InputAdornment position='end'>
                            <IconButton
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                            >
                              {values.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                          </InputAdornment>
                        }
                    />
                )}
            />
        </div>
    )
}

export default Password