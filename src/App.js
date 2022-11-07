import { Routes, Route } from 'react-router-dom'
import React from 'react';
//components
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Footer from './components/Footer/Footer';
import Forgot from './components/Forgot/Forgot';
import EmailCode from './components/EmailCode/EmailCode';
import PasswordCheck from './components/PasswordCheck/PasswordCheck';
import ResetPassword from './components/ResetPassword/ResetPassword';
import PrivateRoutes from './components/PrivateRoutes/PrivateRoutes';
import Home from './pages/Home/Home';
import Verification from './components/Verification/Verification';
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
        <Route path='/home' element={<Home/>} />
        <Route path='/verification' element={<Verification/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
