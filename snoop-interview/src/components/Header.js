import React from 'react';
import '../App.css';
import { Navbar, Nav } from 'react-bootstrap';

function Header() {
  return (
      <>
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Snoop</Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#whoweare">Quienes Somos</Nav.Link>
          <Nav.Link href="#ourproducts">Nuestros Productos</Nav.Link>
          <Nav.Link href="#contact">Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </>
  );
}

export default Header;