import React from 'react'
import logo from "../../assets/images/logo.png"
//style
import { Container } from './LogoStyle'
function Logo() {
    return (
        <Container>
            <img src={logo} alt='logo' />
            <h3>Talents Valley</h3>
        </Container>
    )
}

export default Logo