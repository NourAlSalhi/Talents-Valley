import React from 'react'
import Header from '../../Header/Header'
import check from "../../../assets/images/check.png"
import Button from '../../../hooks/HookForm/Button/Button'
import { useLocation } from 'react-router-dom'
//style
import { Container } from '../../../pages/Login/LoginStyle'
import { Main } from './CheckStyle'
import { Title } from '../../../pages/Verification/VerificationStyle'
const myStyle = {
    height: '754px',
    margin: '65px auto',
    paddingTop: '64px',
    textAlign: 'center',
  }
const VerificationCheck = () => {
    const location = useLocation();
    const name = location.state.name;
    const para = location.state.para;
    return (
        <>
        <Header/>
        <Container style={myStyle}>
            <Main>
            <Title>{name}</Title>
            <img src={check} alt="check" />
            <p>{para}</p>
            <Button value='Continue' type="submit" />
            </Main>
        </Container>
        </>
    )
}

export default VerificationCheck