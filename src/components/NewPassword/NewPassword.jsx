import React from 'react'
import Button from '../../hooks/HookForm/Button/Button'
import Password from '../../hooks/HookForm/Password/Password'
import Logo from '../Logo/Logo'

const NewPassword = () => {
    return (
        <div className='mainLogin main'>
            <Logo />
            <h4>Create New Password</h4>
            <Password label="New Password" name='newPassword'/>
            <Password label='Re-Enter Password' name='confirmPassword' />
            <Button path='/checkPassword' value='Continue' />
        </div>
    )
}

export default NewPassword