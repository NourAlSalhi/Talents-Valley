import React from 'react'
import Header from '../../Header/Header'
import Button from '../../../hooks/HookForm/Button/Button'
import { Link } from 'react-router-dom'
//style
import { Container, FooterSign } from '../../../pages/Login/LoginStyle'
import { Main } from './CodeStyle'
import { Title } from '../../../pages/Verification/VerificationStyle'
const myStyle = {
  height: '754px',
  margin: '65px auto',
  paddingTop: '32px',
  textAlign: 'center',
}
const VerificationCode = (props) => {
  const num = [
    { id: 1, value: 1 },
    { id: 2, value: 2 },
    { id: 3, value: 3 },
    { id: 4, value: 4 },
    { id: 5, value: 5 },
    { id: 6, value: 6 },
  ];
  return (
    <>
      <Header />
      <Container style={myStyle}>
        <Main>
          <Title>{props.title}</Title>
          <img src={props.img} alt='emailImg' />
          <p className='para'>{props.para}</p>
          <form>
            {num.map((elem) => (
              <input key={elem.id} className='number' type='text' />
            ))}
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