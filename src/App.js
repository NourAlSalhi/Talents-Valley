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
import Verification from './pages/Verification/Verification';
import VerificationCodeEmail from './components/Verifications/VerificationCodeEmail/VerificationCodeEmail';
import VerificationCodePhone from './components/Verifications/VerificationCodePhone/VerificationCodePhone';
import VerificationCheck from './components/Verifications/VerificationCheck/VerificationCheck';
import IdVerification from './components/Verifications/IdVerification/IdVerification';
import AddressVerification from './components/Verifications/AddressVerification/AddressVerification';
import  InvoiuceRecords from './components/Invoiuces/InvoiceRecords/InvoiceRecords'
import  Payout from './components/Invoiuces/Payout/Payout'
import Invoiuce from './pages/Invoiuce/Invoiuce';
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
          {/* verification */}
        <Route path='/verification' element={<Verification />} />
        <Route path='/verificationCodeEmail' element={<VerificationCodeEmail />} />
        <Route path='/verificationCodePhone' element={<VerificationCodePhone />} />
        <Route path='/verificationCheck' element={<VerificationCheck />} />
        <Route path='/idVerification' element={<IdVerification />} />
        <Route path='/addressVerification' element={<AddressVerification />} />
        {/* Home */}
        <Route path='/home' element={<Home />} />
        {/* Invoiuces */}
        <Route path='/invoiceRecords' element={<InvoiuceRecords />} />
        <Route path='/payoutRecords' element={<Payout />} />
        <Route path='/invoiuce' element={<Invoiuce />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
