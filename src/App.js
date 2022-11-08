import { Routes, Route } from 'react-router-dom'
import React from 'react';
//components
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Footer from './components/Footer/Footer';
import Forgot from './components/login&Signup/Forgot/Forgot'
import EmailCode from './components/login&Signup/EmailCode/EmailCode';
import PasswordCheck from './components/login&Signup/PasswordCheck/PasswordCheck';
import ResetPassword from './components/login&Signup/ResetPassword/ResetPassword';
import Home from './pages/Home/Home';
import Verification from './components/Verifications/Verification/Verification';
import EmailVerification from './components/Verifications/EmailVerification/EmailVerification';
import VerificationCheck from './components/Verifications/VerificationCheck/VerificationCheck';
import IdVerification from './components/Verifications/IdVerification/IdVerification';
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
        <Route path='/emailVerification' element={<EmailVerification />} />
        <Route path='/verificationCheck' element={<VerificationCheck />} />
        <Route path='/idVerifiction' element={<IdVerification/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
