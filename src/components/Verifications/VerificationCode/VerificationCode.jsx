import React, { useState } from 'react'
import Header from '../../Header/Header'
import Button from '../../../hooks/HookForm/Button/Button'
import { Link } from 'react-router-dom'
//style
import { Container, FooterSign } from '../../../pages/Login/LoginStyle'
import { Main } from './CodeStyle'
import { Title } from '../../../pages/Verification/VerificationStyle'
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
const VerificationCode = (props) => {
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
    fetch('https://talents-valley.herokuapp.com/api/user/verify/email', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
         Authorization: localStorage.getItem('token'),
        },
      body: JSON.stringify({
        verificationCode: finalCode,
      }),
    })
      .then((response) => response.json())
      // .then((result) => 
      //   navigate('/resetPassword')
      // )
      .catch((error) => console.log('error', error));
  };
  return (
    <>
      <Header />
      <Container style={myStyle}>
        <Main>
          <Title>{props.title}</Title>
          <img src={props.img} alt='emailImg' />
          <p className='para'>{props.para}</p>
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

export default VerificationCode