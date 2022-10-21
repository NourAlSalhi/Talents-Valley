import React from 'react'
import { useForm } from 'react-hook-form';
import Logo from '../../components/Logo/Logo';
import Input from '../../hooks/HookForm/Input/Input';
import Password from '../../hooks/HookForm/Password/Password';
import Button from '../../hooks/HookForm/Button/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerAccountSchema } from '../../utils/Validation/yup';
import { Link } from "react-router-dom";
import axios from "axios";
//style
import "./login.css"
//constant
const baseURL = "https://talents-valley.herokuapp.com/api";
const Login = () => {
    //state
    // const [data, setData] = React.useState({
    //     email: '',
    //     Password: ''
    // });
    //hook
    const { register,handleSubmit, formState: { errors } } = useForm(
        {
            resolver: yupResolver(registerAccountSchema),
        }
    );

    //function
    const handleChange = (e) => {

    }
    const submit = data => console.log(data);

    // React.useEffect(() => {
    //     axios.post(baseURL).then((response) => {
    //         setPost(response.data);
    //     });
    // }, []);

    return (
        <div className='main mainLogin'>
            <Logo />
            <h4>Login to Your Account</h4>
            <div className='form'>
                <form onSubmit={handleSubmit(submit)}>
                    <Input placeholder='email@gmail.com'  register={register} value="Email" name="email" type="email" />
                    {/* {errors.email && <p className='error'>{errors.email.message}</p>} */}
                    <Password label="Password" name='password' />
                    {/* {errors.password && <p className='error'>{errors.password.message}</p>} */}
                    <Link className='forget' to="/forgot">Forgot Password?</Link>
                    {/* <input  {...register('newPassword')} />
                    {errors.newPassword && <p className='error'>{errors.newPassword.message}</p>} */}
                    <Button value='Sign In ' path="/" type="submit" />
                </form>
                <div className='logAccount'>
                    <p>Don't have an account?<span><Link className='sign' to="/signup">Sign up</Link></span> </p>
                </div>
            </div>
        </div>
    )
}

export default Login