import React, { useState } from 'react'
import Header from '../../Header/Header'
import Button from '../../../hooks/HookForm/Button/Button'
import { Link, useNavigate } from 'react-router-dom'
import phone from '../../../assets/images/phone.png'
//style
import { Container, FooterSign } from '../../../pages/Login/LoginStyle'
import { Title } from '../../../pages/Verification/VerificationStyle'
import { Main } from '../VerificationCodeEmail/CodeStyle'
//constant
const myStyle = {
  height: '754px',
  margin: '65px auto',
  paddingTop: '32px',
  textAlign: 'center',
}
const VerificationCodePhone = (props) => {
  const navigate = useNavigate()
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
    fetch('https://talents-valley.herokuapp.com/api/user/verify/mobile', {
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
              name: 'Phone Verification',
              para: 'Your Phone Number has been Verified Successfully'
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
          <Title>Phone Verification</Title>
          <img src={phone} alt='emailImg' />
          <p className='para'>We have sent you a verification code to your phone number ********789</p>
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
                  // style={data ? { borderBottom: "3px solid #7dbf2a" } : { borderBottom: "3px solid grey" }}
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

export default VerificationCodePhone