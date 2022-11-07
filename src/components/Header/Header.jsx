import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo1.png'
//style
import { Container } from './HeaderStyle'
const Header = () => {
  return (
    <Container>
      <div className='logo'>
        <img src={logo} alt='logo' />
        <h3>TALENTS VALLEY</h3>
      </div>
      <div className='links'>
      <Link className='link' to="/home">Home</Link>
      <Link className='link' to="/invoices">Invoices</Link>
      <button>Create</button>
      </div>
    </Container>
  )
}

export default Header