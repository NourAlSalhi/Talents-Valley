import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
//components
import Button from '../../../hooks/HookForm/Button/Button';
import Logo from '../Logo/Logo';
//style
import { Container, FooterSign, Title } from '../../../pages/Login/LoginStyle';
import { Main } from './EmailStyle';
//constant
const baseURL = 'https://talents-valley-backend.herokuapp.com/api/user/send-code-email';
const EmailCode = () => {
    //state
    const [inputs, setInputs] = useState({});
    const arrvirf = [inputs.input1,inputs.input2,inputs.input3,inputs.input4,inputs.input5,inputs.input6]; 
    const finalcode = arrvirf.join("");
    const location = useLocation();
    const navigate = useNavigate();
    const id = location.state.id;
    //function
    const VerifCode = (e) =>{
        e.preventDefault();
        const data = {  
          _id :id ,
          verificationCode: finalcode ,
        } 
          fetch(baseURL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((result) => 
            navigate('/resetPassword',{state:{Token:result.data.recoverToken}})
          )
          .catch((error) => console.log('error', error)); 
      };


    return (
        <Container style={{ height: '821px', }}>
            <Logo />
            <Title>Check Your Email</Title>
            <Main>
                <p className='para'>We have sent you an email that contains a code to
                    reset your password</p>
                <div className='form'>
                    <form onSubmit={VerifCode}>
                        <div className='contNum'>
                            <div className='codeNum1'>
                                <div className='codeNum'><input className='number'
                                    type='text'
                                    name='code1'
                                    onChange={e=>setInputs({ ...inputs, input1: e.target.value }) } /> </div>
                                <div className='codeNum'><input className='number'
                                    type='text'
                                    name='code2'
                                    onChange={e=>setInputs({ ...inputs, input2: e.target.value }) } 
                                     /> </div>
                                <div className='codeNum'><input className='number'
                                    type='text'
                                    name='code3'
                                    onChange={e=>setInputs({ ...inputs, input3: e.target.value }) } 
                                    /> </div>
                            </div>
                            <div>
                                <div className='codeNum'><input className='number'
                                    type='text'
                                    name='code4'
                                    onChange={e=>setInputs({ ...inputs, input4: e.target.value }) } 
                                    /> </div>
                                <div className='codeNum'><input className='number'
                                    type='text'
                                    name='code5'
                                    onChange={e=>setInputs({ ...inputs, input5: e.target.value }) } 
                                    /> </div>
                                <div className='codeNum'><input className='number'
                                    type='text'
                                    name='code6'
                                    onChange={e=>setInputs({ ...inputs, input6: e.target.value }) } 
                                    /> </div>
                            </div>
                        </div>
                        <Button value="Continue " type='submit' />
                        <FooterSign>
                            <p>Didn't get the code?<span><Link className='sign' to="/emailCode">Resend</Link></span> </p>
                        </FooterSign>
                    </form>
                </div>
            </Main>
        </Container>
    )
}

export default EmailCode