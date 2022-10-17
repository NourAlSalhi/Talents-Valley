import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Footer from './components/Footer/Footer';
import Forgot from './components/Forgot/Forgot';
import CheckEmail from './components/CheckEmail/CheckEmail';
//style
import './App.css';
import PasswordCheck from './components/PasswordCheck/PasswordCheck';
function App() {
  return (
    <div className="App">
      <Login />
      {/* <Signup/> */}
      {/* <Forgot /> */}
      {/* <CheckEmail/> */}
      {/* <PasswordCheck /> */}
      <Footer/>
    </div>
  );
}

export default App;
