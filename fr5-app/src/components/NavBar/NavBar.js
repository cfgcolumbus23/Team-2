import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand className="mx-3 navbar_brand" as={Link} to="/home">Now Ready 5</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-5 my-auto">
          <Nav.Link as={Link} to="/Home">Home</Nav.Link>
          <Nav.Link as={Link} to="/About">About</Nav.Link> 
          <Nav.Link as={Link} to="/Services">Services</Nav.Link>
          <Button as={Link} to="/Login" className="ml-auto text-end" variant="outline-primary">Log In</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
