// App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.js';
import Home from './pages/Home.js';
// Make sure to uncomment and import your other pages as well when you are ready to use them
import About from './pages/About.js';
// import Services from './pages/Services.js';
// import Contact from './pages/Contact.js';

const App = () => {
  return(
    <>
    <Router>
      <NavBar />
      <Routes>

        <Route path="/Home" element={<Home />} />
        {/* The following routes are commented out but follow the same pattern */}
      <Route path="/about" element={<About />} />
        {/* <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />  */}
        {/* Add more routes as needed */}
      </Routes>
    </Router>
    {/* <Button variant="contained">Click me</Button>; */}
    </>
  );
}

export default App;


