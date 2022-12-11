import React, { useState } from 'react'
import Header from '../../Header/Header'
import Button from '../../../hooks/HookForm/Button/Button'
import { Link, useNavigate } from 'react-router-dom'
import email from '../../../assets/images/email.png'
//style
import { Container, FooterSign } from '../../../pages/Login/LoginStyle'
import { Title } from '../../../pages/Verification/VerificationStyle'
import { Main } from './CodeStyle'
//constant
const myStyle = {
  height: '754px',
  margin: '65px auto',
  paddingTop: '32px',
  textAlign: 'center',
}
//const num = [
//   { id: 1, name: 'input1' },
//   { id: 2, name: 'input2' },
//   { id: 3, name: 'input3' },
//   { id: 4, name: 'input4' },
//   { id: 5, name: 'input5' },
//   { id: 6, name: 'input6' },
// ];
const VerificationCodeEmail = (props) => {
  //constatnt
  const navigate = useNavigate();
  const emaill = localStorage.getItem('email')
  const endemail = ''
  //state
  const [err, setError] = useState();
  const [code, setcode] = useState(new Array(6).fill(""));
  const finalCode = code.join("")
  //function
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setcode([...code.map((d, indx) => (indx === index ? element.value : d))]);
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    fetch('https://talents-valley-backend.herokuapp.com/api/user/verify/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        verificationCode: finalCode,
      }),
    })
      .then((response) => response.json())
      .then(result => {
        if (result.statusCode >= 400)
          setError(result.message)
        else if (result.statusCode < 400) {
          navigate('/verificationCheck', {
            state: {
              name: 'Email Verification',
              para: 'Your Email has been Verified Successfully'
            }
          })
        }
      })
      .then(res => console.log(res))
      .catch((error) => console.log('error', error));
  };
  return (
    <>
      <Header />
      <Container style={myStyle}>
        <Main>
          <Title>Email Verification</Title>
          <img src={email} alt='emailImg' />
          <p className='para'>We have sent you a verification code to your email ****{endemail}@gmail.com</p>
          <form onSubmit={onSubmit}>
            {code.map((data, index) => {
              return (
                <input
                  disabled={props.second <= 0 ? true : false}
                  type="text"
                  className="number"
                  name="code"
                  maxLength={1}
                  key={index}
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  onFocus={(e) => e.target.select}
                />
              );
            })}
            <p style={{ color: 'red', textAlign: 'left' }}>{err}</p>
            <Button value='Continue' type="submit" />
          </form>
          <FooterSign>
            <p>Didn't get the code?<span><Link className='sign' to="/emailCode">Resend</Link></span> </p>
          </FooterSign>
        </Main>
      </Container>
    </>
  )
}

export default VerificationCodeEmail