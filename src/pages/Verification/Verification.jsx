import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import check from '../../assets/images/check.png'
import { onSubmit } from '../../lib/helpers/verifiyFun';
import { urlEmail, urlPhone } from '../../apis/verifiy';
//components
import Header from '../../components/Header/Header'
//style
import { Main, Title, Contain } from './VerificationStyle';
import { Container } from '../Login/LoginStyle';
import { ButtonStyle } from '../../hooks/HookForm/Button/style';
//constant
const mystyle = { height: '834px', margin: '65px auto 45px', padding: '32px 114px 123px 113px' };
const Verification = () => {
  const email = localStorage.getItem('emial')
  const phone = localStorage.getItem('mobile')
  const startPhone = phone.slice(0, 4)
  const endPhone = phone.slice(9)
  const [isCheck, setCheck] = useState(false)

  useEffect(() => {
      fetch('https://talents-valley.herokuapp.com/api/settings/profile', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      })
        .then((response) => response.json())
        .then(() => setCheck(true))
        .catch((error) => console.log('error', error));
  }, [])

  //state
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
              <p className='details'>{email}<span>(not verified)</span></p>
            </div>
            {/* <button onClick={onSubmit(urlEmail)}><Link className='Link' to='/verificationCodeEmail'>Verify</Link></button> */}
            {isCheck ? <button onClick={onSubmit(urlEmail)}><Link className='Link' to='/verificationCodeEmail'>Verify</Link></button>
              :  <img src={check} />
            }
            {/* {
              check? <img src={check} /> : 'dd'
            } */}
          </Contain>
          <Contain style={{ marginTop: '16px' }}>
            <div>
              <p className='title'>Phone Number</p>
              <p className='details'>{startPhone} ****** {endPhone}<span>(not verified)</span></p>
            </div>
            <button onClick={onSubmit(urlPhone)}><Link className='Link' to='/verificationCodePhone'>Verify</Link></button>
          </Contain>
          <p className='verifPara'>You can complete the 2 following tasks later</p>
          <Contain style={{ marginTop: '16px' }}>
            <div>
              <p className='title'>ID Verification</p>
              <p className='details'>Identity card - Driver license - Passport</p>
            </div>
            <button><Link className='Link' to='/idVerification'>Verify</Link></button>
          </Contain>
          <Contain style={{ marginTop: '16px' }}>
            <div>
              <p className='title'>Address Verification</p>
              <p className='details'>Phone, Electricity, Water Bill - Bank statement</p>
            </div>
            <button><Link className='Link' to='/addressVerification'>Verify</Link></button>
          </Contain>
          <ButtonStyle >Continue</ButtonStyle>
        </Main>
      </Container>
    </>
  )
}

export default Verification