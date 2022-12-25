import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
//components
import Header from '../../Header/Header'
import check from "../../../assets/images/check.png"
import Button from '../../../hooks/HookForm/Button/Button'
import { basedUrl } from '../../../apis/verifiy';
//style
import { Container } from '../../../pages/Login/LoginStyle'
import { Main } from './CheckStyle'
import { Title } from '../../../pages/Verification/VerificationStyle'
const myStyle = { height: '754px', margin: '65px auto', paddingTop: '64px', textAlign: 'center' }

const VerificationCheck = () => {
  //constant
  const location = useLocation();
  const name = location.state.name;
  const para = location.state.para;
  const navigate = useNavigate();
  //function
  const onSubmit = () => {
    fetch(`${basedUrl}settings/profile`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }
    })
      .then((response) => response.json())
      .then(data => {
        localStorage.setItem("user", JSON.stringify(data.data))
        navigate('/verification')
      })

      .catch((error) => console.log('error', error));
  }
  return (
    <>
      <Header />
      <Container style={myStyle}>
        <Main>
          <Title>{name}</Title>
          <img src={check} alt="check" />
          <p>{para}</p>
          <Button value='Continue' onClick={onSubmit} />
        </Main>
      </Container>
    </>
  )
}

export default VerificationCheck