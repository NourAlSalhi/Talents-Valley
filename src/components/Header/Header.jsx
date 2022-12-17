import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo1.png'
//style
import { Container, Button } from './HeaderStyle'
const Header = () => {

  return (
    <Container>
      <div className='logo'>
        <img src={logo} alt='logo' />
        <h3>TALENTS VALLEY</h3>
      </div>
      <nav className='links'>
        <ul>
          <li> <Link className='link' to="/home">Home</Link></li>
          <li> <Link className='link' to="/invoices">Invoices</Link></li>
          <li> <Button>Create</Button></li>
        </ul>
      </nav>
    </Container>
  )
}

export default Header