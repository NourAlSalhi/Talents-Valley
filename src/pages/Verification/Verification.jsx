import React from 'react'
import Header from '../../components/Header/Header'

//style
import { Main, Title, Contain } from './VerificationStyle';
import { Container } from '../Login/LoginStyle';
import { ButtonStyle } from '../../hooks/HookForm/Button/style';
//constant
const mystyle = {
  height: '834px',
  margin: '65px auto 45px',
  padding: '32px 114px 123px 113px'
};
const Verification = () => {
  return (
    <>
      <Header />
      <Container style={mystyle}>
        <Main>
          <Title>Verification</Title>
          <p className='para'>To use our services, We need to verify your account</p>
          <Contain>
            <div>
              <p className='title'>Email Address</p>
              <p className='details'>mail@email.com <span>(not verified)</span></p>
            </div>
            <button>Verify</button>
          </Contain>
          <Contain style={{ marginTop: '16px' }}>
            <div>
              <p className='title'>Phone Number</p>
              <p className='details'>+972 ******966 <span>(not verified)</span></p>
            </div>
            <button>Verify</button>
          </Contain>
          <p className='verifPara'>You can complete the 2 following tasks later</p>
          <Contain style={{ marginTop: '16px' }}>
            <div>
              <p className='title'>ID Verification</p>
              <p className='details'>Identity card - Driver license - Passport</p>
            </div>
            <button>Verify</button>
          </Contain>
          <Contain style={{ marginTop: '16px' }}>
            <div>
              <p className='title'>Address Verification</p>
              <p className='details'>Phone, Electricity, Water Bill - Bank statement</p>
            </div>
            <button>Verify</button>
          </Contain>
          <ButtonStyle >Continue</ButtonStyle>
        </Main>
      </Container>
    </>
  )
}

export default Verification