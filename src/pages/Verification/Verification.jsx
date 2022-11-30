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
  const emailVerify = localStorage.getItem('emailVerify')
  const mobileVerify = localStorage.getItem('mobileVerify')
  const user = localStorage.getItem('user')
  const startPhone = phone.slice(0, 4)
  const endPhone = phone.slice(9)
  const navigate = useNavigate()
  // const [isCheck, setCheck] = useState(true)
  const handelClick = ()=>{
    navigate('/invoiceRecords')
  }
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
              <p className='details'>{email}<span style={{ color: emailVerify === "true" ? "green" : "red" }}> ({emailVerify === "true" ? "verified": "not verified"}) </span></p>
            </div>
            {/* <button onClick={onSubmit(urlEmail)}><Link className='Link' to='/verificationCodeEmail'>Verify</Link></button> */}
            {emailVerify == 'true'? <img src={check} />
              : <button onClick={onSubmit(urlEmail)}><Link className='Link' to='/verificationCodeEmail'>Verify</Link></button>
            }
            {/* {
              check? <img src={check} /> : 'dd'
            } */}
          </Contain>
          <Contain style={{ marginTop: '16px' }}>
            <div>
              <p className='title'>Phone Number</p>
              <p className='details'>{startPhone} ****** {endPhone}<span style={{ color: mobileVerify === "true" ? "green" : "red" }}> ({mobileVerify === "true" ? "verified": "not verified"}) </span></p>
            </div>
            {/* <button onClick={onSubmit(urlPhone)}><Link className='Link' to='/verificationCodePhone'>Verify</Link></button> */}
            {mobileVerify == 'true' ? <img src={check} />
              :  <button onClick={onSubmit(urlPhone)}><Link className='Link' to='/verificationCodePhone'>Verify</Link></button>
            }
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
          <ButtonStyle style={{backgroundColor: emailVerify&&mobileVerify =='false'?"#A7BDFB" : "#4375FF"}} disabled={emailVerify&&mobileVerify} onClick={handelClick}>Continue</ButtonStyle>
        </Main>
      </Container>
    </>
  )
}

export default Verification