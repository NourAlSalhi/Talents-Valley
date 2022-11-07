import React from 'react'
import Header from '../Header/Header'

//style
import { Main, Title } from './VerificationStyle';
import { Container } from '../../pages/Login/LoginStyle';
//constant
const mystyle = {
  height:'834px',
  margin: '65px auto 45px',
  padding: '32px 114px 123px 113px'
};
const Verification = () => {
  return (
    <div>
      <Header/>
      <Container style={mystyle}>
        <Main>
       <Title>Verification</Title>
       <p>To use our services, We need to verify your account</p>
       </Main>
      </Container>
    </div>
  )
}

export default Verification