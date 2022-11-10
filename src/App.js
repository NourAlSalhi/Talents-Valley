import { Routes, Route } from 'react-router-dom'
import React from 'react';
import email from './assets/images/email.png'
import phone from './assets/images/phone.png'
//components
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Footer from './components/Footer/Footer';
import Forgot from './components/login&Signup/Forgot/Forgot'
import EmailCode from './components/login&Signup/EmailCode/EmailCode';
import PasswordCheck from './components/login&Signup/PasswordCheck/PasswordCheck';
import ResetPassword from './components/login&Signup/ResetPassword/ResetPassword';
import Home from './pages/Home/Home';
import Verification from './pages/Verification/Verification';
import VerificationCode from './components/Verifications/VerificationCode/VerificationCode';
import VerificationCheck from './components/Verifications/VerificationCheck/VerificationCheck';
import IdVerification from './components/Verifications/IdVerification/IdVerification';
import AddressVerification from './components/Verifications/AddressVerification/AddressVerification';
//style
import './App.css';


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/forgot' element={<Forgot />} />
        <Route path='/emailCode' element={<EmailCode />} />
        <Route path='/resetPassword' element={<ResetPassword />} />
        <Route path='/checkPassword' element={<PasswordCheck />} />
        <Route path='/home' element={<Home />} />
        <Route path='/verification' element={<Verification />} />
        <Route path='/verificationCodeEmail' element={<VerificationCode title='Email Verification' img={email} para='We have sent you a verification code to your email ****78@gmail.com' />} />
        <Route path='/verificationCodePhone' element={<VerificationCode title='Phone Verification' img={phone} para='We have sent you a verification code to your phone number ********789' />} />
        <Route path='/verificationCheck' element={<VerificationCheck />} />
        <Route path='/idVerification' element={<IdVerification />} />
        <Route path='/addressVerification' element={<AddressVerification />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
