import React from 'react'
import Button from '../../hooks/HookForm/Button/Button'
import Password from '../../hooks/HookForm/Password/Password'
import Logo from '../Logo/Logo'
import { yupResolver } from '@hookform/resolvers/yup';
import { resetPassword } from '../../utils/Validation/yup';
import { useForm } from 'react-hook-form'
//style
import { Container, Title } from '../../pages/Login/LoginStyle'
//constant
const ResetPassword = () => {
    const { register, handleSubmit, formState: { errors } } = useForm(
        {
            resolver: yupResolver(resetPassword),
        }
    )
    const submit = data => console.log(data)
    return (
        <Container style={{ height: '821px', }}>
            <Logo />
            <Title>Create New Password</Title>
            <form onSubmit={handleSubmit(submit)}>
                <Password label="New Password" name='newPassword' register={register} />
                {errors.newPassword && <p className='error'>{errors.newPassword.message}</p>}
                <Password label='Re-Enter Password' name='confirmPassword' register={register} />
                {errors.confirmPassword && <p className='error'>{errors.confirmPassword.message}</p>}
                <Button path='/checkPassword' value='Continue' />
            </form>
        </Container>
    )
}

export default ResetPassword