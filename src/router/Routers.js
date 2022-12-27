import React from 'react'
import { useRoutes } from "react-router-dom";
//login
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup';
import Forgot from '../components/login&Signup/Forgot/Forgot'
import EmailCode from '../components/login&Signup/EmailCode/EmailCode';
import PasswordCheck from '../components/login&Signup/PasswordCheck/PasswordCheck';
import ResetPassword from '../components/login&Signup/ResetPassword/ResetPassword';
//verification
import Verification from '../pages/Verification/Verification';
import VerificationCodeEmail from '../components/Verifications/VerificationCodeEmail/VerificationCodeEmail';
import VerificationCodePhone from '../components/Verifications/VerificationCodePhone/VerificationCodePhone';
import VerificationCheck from '../components/Verifications/VerificationCheck/VerificationCheck';
import IdVerification from '../components/Verifications/IdVerification/IdVerification';
import AddressVerification from '../components/Verifications/AddressVerification/AddressVerification';
//Home
import Home from '../pages/Team/Home/Home';
import Invoiuce from '../pages/Team/Invoiuce/Invoiuce';
import User from '../pages/Team/User/User';
import CreateInvoiuce from '../pages/Team/CreateInvoiuce/CreateInvoiuce';
import InvoiuceRecords from '../components/Invoiuces/InvoiceRecords/InvoiceRecords'
import Payout from '../components/Invoiuces/Payout/Payout'
import AddLink from '../components/Invoiuces/AddLink/AddLink';

const Routers = () => {
    let element = useRoutes([
        { path: '/', element: <Login /> },
        { path: '/signup', element: <Signup /> },
        { path: '/forgot', element: <Forgot /> },
        { path: '/emailCode', element: <EmailCode /> },
        { path: '/resetPassword', element: <ResetPassword /> },
        { path: '/checkPassword', element: <PasswordCheck /> },
        {
            path: '/verification', children: [
                { index: true, element: <Verification /> },
                { path: 'verificationCodeEmail', element: <VerificationCodeEmail /> },
                { path: 'verificationCodePhone', element: <VerificationCodePhone /> },
                { path: 'verificationCheck', element: <VerificationCheck /> },
                { path: 'idVerification', element: <IdVerification /> },
                { path: 'addressVerification', element: <AddressVerification /> },
            ]
        },
        { path: '/home', element: <Home /> },
        { path: '/invoiuce', element: <Invoiuce /> },
        { path: '/user', element: <User /> },
        {
            path: '/createInvoiuce', element: <CreateInvoiuce />, children: [
                { path: 'invoiceRecords', element: <InvoiuceRecords /> },
                { path: 'payoutRecords', element: <Payout /> },
                { path: 'addLink', element: <AddLink /> },
            ]
        },
        { path: '*', element: <h1 style={{margin:'300px 800px',color:'red'}}>Page Not Found!!</h1> },
    ])
    return element
}

export default Routers

