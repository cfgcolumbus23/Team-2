import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link
import './NavBar.css';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand className="mx-3 navbar_brand" as={Link} to="/home"><span className="navbar-brand-now">Now</span> Ready 5</Navbar.Brand> {/* Updated */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/Home">Home</Nav.Link> {/* Updated */}
          <Nav.Link as={Link} to="/About">About</Nav.Link> {/* Updated */}
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/action/3.1">Action</NavDropdown.Item> {/* Updated */}
            <NavDropdown.Item as={Link} to="/action/3.2">Another action</NavDropdown.Item> {/* Updated */}
            <NavDropdown.Item as={Link} to="/action/3.3">Something</NavDropdown.Item> {/* Updated */}
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/action/3.4">Separated link</NavDropdown.Item> {/* Updated */}
          </NavDropdown>
        </Nav>
        {/* The Form can stay as is, unless you need it to interact with the router as well */}
        <Form>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>

      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
