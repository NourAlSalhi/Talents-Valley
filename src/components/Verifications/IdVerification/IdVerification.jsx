import React from 'react'
import Header from '../../Header/Header'
import id from '../../../assets/images/id.jpeg'
//style
import { Container } from '../../../pages/Login/LoginStyle'
import { Title } from '../Verification/VerificationStyle'
import { Main } from './IdVerifivcationStyle'
const mystyle = {
    height: '821px',
    margin: '65px auto 58px',
    textAlign: 'center',
    padding: '32px 102px 88px 101px'
}
const IdVerification = () => {
    return (
        <>
            <Header />
            <Container style={mystyle}>
                <Main>
                    <Title>ID Verification</Title>
                    <img src={id} alt='emailImg' />
                    <p>Upload Document that Proof your Identity such as: Identity Card, Passport, Driver License</p>
                </Main>
            </Container>
        </>
    )
}

export default IdVerification