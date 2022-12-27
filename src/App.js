import { BrowserRouter as Router } from "react-router-dom";
import React from 'react';
// inside all components routes
import Routers from './router/Routers';
//components
import Footer from './components/Footer/Footer';
//style
import './App.css';
const App = () => {
  return (
    <Router>
      <div className="App">
        <Routers />
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
