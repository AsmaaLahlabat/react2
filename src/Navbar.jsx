// Navbar.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CustomNavbar = () => {
  return (
    <Navbar bg="secondary" expand="lg" fixed="top" className="text-uppercase" id="mainNav">
      <Container>
        <Navbar.Brand href="#page-top">Start Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" className="text-uppercase font-weight-bold bg-primary text-white rounded">
          Menu <i className="fas fa-bars"></i>
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarResponsive">
          <Nav className="ms-auto">

           
            <Nav.Link as={Link} to={'/Portfolio'} className="py-3 px-0 px-lg-3 rounded">Portfolio</Nav.Link>
            <Nav.Link as={Link} to={'/About'} href="#about" className="py-3 px-0 px-lg-3 rounded">About</Nav.Link>
            <Nav.Link as={Link} to={'/Contact'} href="#contact" className="py-3 px-0 px-lg-3 rounded">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;