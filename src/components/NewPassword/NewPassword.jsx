import React from 'react'
import Button from '../../hooks/HookForm/Button/Button'
import Password from '../../hooks/HookForm/Password/Password'
import Logo from '../Logo/Logo'
import { yupResolver } from '@hookform/resolvers/yup';
import { registerAccountSchema } from '../../utils/Validation/yup';
import { useForm } from 'react-hook-form'

const NewPassword = () => {
    const { register, handleSubmit, formState: { errors } } = useForm(
        {
            resolver: yupResolver(registerAccountSchema),
        }
    )
    const submit = data => console.log(data)
    return (
        <div className='mainLogin main'>
            <Logo />
            <h4>Create New Password</h4>
            <form onSubmit={handleSubmit(submit)}>
                <Password label="New Password" name='newPassword' register={register} />
                {errors.newPassword && <p className='error'>{errors.newPassword.message}</p>}
                <Password label='Re-Enter Password' name='confirmPassword' register={register} />
                {errors.confirmPassword && <p className='error'>{errors.confirmPassword.message}</p>}
                <Button path='/checkPassword' value='Continue' />
            </form>
        </div>
    )
}

export default NewPassword