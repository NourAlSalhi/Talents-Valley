import React from 'react'
import Header from '../../Header/Header'
import check from "../../../assets/images/check.png"
import Button from '../../../hooks/HookForm/Button/Button'
//style
import { Container } from '../../../pages/Login/LoginStyle'
import { Main } from './CheckStyle'
import { Title } from '../Verification/VerificationStyle'
const myStyle = {
    height: '754px',
    margin: '65px auto',
    paddingTop: '64px',
    textAlign: 'center',
  }
const VerificationCheck = () => {
    return (
        <>
        <Header/>
        <Container style={myStyle}>
            <Main>
            <Title>Email Verification</Title>
            <img src={check} alt="check" />
            <p>Your Email has been Verified Successfully</p>
            <Button value='Continue' type="submit" />
            </Main>
        </Container>
        </>
    )
}

export default VerificationCheck