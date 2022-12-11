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
  const user = localStorage.getItem('user');
  const userObj = JSON.parse(user);
  // const email = (userObj.email)
  // const mobile = (userObj.mobile)
  // const emailVerify = (userObj.verifiedEmail)
  // const mobileVerify = (userObj.verifiedMobile)
  // const idVerify = (userObj.verifiedId.status)
  // const addressVerify = (userObj.verifiedAddress.status)
  const startPhone = userObj.mobile.slice(0, 4)
  const endPhone = userObj.mobile.slice(9)
  const navigate = useNavigate()

  const userProfile = () => {
    fetch('https://talents-valley-backend.herokuapp.com/api/settings/profile', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      })
        .then((response) => response.json())
        .then(data => {
          localStorage.setItem("user", JSON.stringify(data.data))
        })
        .catch((error) => console.log('error', error));
}
  useEffect( () =>{
    userProfile()
  },[userObj.verifiedId.status,userObj.verifiedAddress.status])

  const handelClick = () => {
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
              <p className='details'>{userObj.email}<span style={{ color: userObj.verifiedEmail ? "#19AB16" : "#E80707" }}> ({userObj.verifiedEmail ? "verified" : "not verified"}) </span></p>
            </div>
            {userObj.verifiedEmail ? <img src={check} />
              : <button className='btnVer' onClick={onSubmit(urlEmail)}><Link className='Link' to='/verificationCodeEmail'>Verify</Link></button>
            }
          </Contain>
          <Contain style={{ marginTop: '16px' }}>
            <div>
              <p className='title'>Phone Number</p>
              <p className='details'>{startPhone} ****** {endPhone}<span style={{ color: userObj.verifiedMobile ? "#19AB16" : "#E80707" }}> ({userObj.verifiedMobile ? "verified" : "not verified"}) </span></p>
            </div>
            {userObj.verifiedMobile ? <img src={check} />
              : <button className='btnVer' onClick={onSubmit(urlPhone)}><Link className='Link' to='/verificationCodePhone'>Verify</Link></button>
            }
          </Contain>
          <p className='verifPara'>You can complete the 2 following tasks later</p>
          <Contain style={{ marginTop: '16px' }}>
            <div>
              <p className='title'>ID Verification</p>
              <p className='details'>Identity card - Driver license - Passport</p>
            </div>
            {/* <button><Link className='Link' to='/idVerification'>Verify</Link></button> */}
            {userObj.verifiedId.status == 'pending' ? <button className='btnPen'>Pending</button>
              : <button className='btnVer'><Link className='Link' to='/idVerification'>Verify</Link></button>
            }
          </Contain>
          <Contain style={{ marginTop: '16px' }}>
            <div>
              <p className='title'>Address Verification</p>
              <p className='details'>Phone, Electricity, Water Bill - Bank statement</p>
            </div>
            {/* <button className='btnVer'><Link className='Link' to='/addressVerification'>Verify</Link></button> */}
            {userObj.verifiedAddress.status == 'pending' ? <button className='btnPen'>Pending</button>
              : <button className='btnVer'><Link className='Link' to='/addressVerification'>Verify</Link></button>
            }
          </Contain>
          <ButtonStyle style={{ backgroundColor: userObj.verifiedEmail && userObj.verifiedMobile ? "#4375FF" : "#A7BDFB" }} disabled={userObj.verifiedEmail && userObj.verifiedMobile  == false}>Continue</ButtonStyle>
        </Main>
      </Container>
    </>
  )
}

export default Verification