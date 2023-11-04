// App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Login from './views/Login/Login';

const App = () => {
  return(
    <>
    <Router>
      <NavBar className="fs-1" />
      <Routes>

        <Route path="/home" element={<Home />} />
        {/* The following routes are commented out but follow the same pattern */}
      <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
    </>
  );
}

export default App;


