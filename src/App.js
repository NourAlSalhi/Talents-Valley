import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Footer from './components/Footer/Footer';
import Forgot from './components/Forgot/Forgot';
import EmailCode from './components/EmailCode/EmailCode';
import PasswordCheck from './components/PasswordCheck/PasswordCheck';
import ResetPassword from './components/ResetPassword/ResetPassword';
import {Routes,Route} from 'react-router-dom'
//style
import './App.css';
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/forgot' element={<Forgot/>} />
      <Route path='/EmailCode' element={<EmailCode/>} />
       <Route path='/resetPassword' element={<ResetPassword/>} />
      <Route path='/checkPassword' element={<PasswordCheck/>} />
     </Routes>
     <Footer />
    </div>
  );
}

export default App;
