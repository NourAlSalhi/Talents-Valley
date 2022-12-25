import React,{useState} from 'react'
import Button from '../../../hooks/HookForm/Button/Button'
import Password from '../../../hooks/HookForm/Password/Password'
import Logo from '../Logo/Logo'
import { basedUrl} from '../../../apis/verifiy'
import { yupResolver } from '@hookform/resolvers/yup';
import { resetPassword } from '../../../utils/Validation/yup';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
//style
import { Container, Title } from '../../../pages/Login/LoginStyle'
//constant
const ResetPassword = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const token = location.state.Token;
    const [err,setError]=useState()
    const { register, handleSubmit, formState: { errors } } = useForm(
        {
            resolver: yupResolver(resetPassword),
        }
    )
    //function
    const handelReset = (data) => {
        fetch(`${basedUrl}user/password/recover`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                password: data.ResetPassword,
                recoverToken: token,
            }),
        })
            .then(response => response.json())
            .then((res)=>{
                 if(res.statusCode < 400)
                 {navigate('/checkPassword')}
                 else if (res.statusCode >= 400)
                 setError(res.message)
             })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <Container style={{ height: '821px', }}>
            <Logo />
            <Title>Create New Password</Title>
            <form onSubmit={handleSubmit(handelReset)}>
                <Password label="New Password" name='ResetPassword' register={register} />
                <Password label='Re-Enter Password' name='confirmPassword' register={register} />
                {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
                <p>{err}</p>
                <Button path='/checkPassword' value='Continue' />
            </form>
        </Container>
    )
}

export default ResetPassword