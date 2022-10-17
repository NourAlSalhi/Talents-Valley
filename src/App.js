import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Footer from './components/Footer/Footer';
//style
import './App.css';
function App() {
  return (
    <div className="App">
      <Login />
      {/* <Signup/> */}
      <Footer/>
    </div>
  );
}

export default App;
