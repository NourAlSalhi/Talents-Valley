import React from 'react'
import Logo from '../Logo/Logo'
import Button from '../../hooks/HookForm/Button/Button'
import check from "../../assets/images/check.png"
//style
import { Container, Title } from '../../pages/Login/LoginStyle'
import { Main } from './CheckPasStyle'
//constant
const PasswordCheck = () => {
    return (
        <Container style={{ height: '821px', }}>
            <Main>
                <Logo />
                <img className='check' src={check} />
                <Title>Password Reset</Title>
                <p>Your Password has been Successfully Reset.
                    Click Below To Login</p>
                <Button value="Sign In " path="/" />
            </Main>
        </Container>
    )
}

export default PasswordCheck