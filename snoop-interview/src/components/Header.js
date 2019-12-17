import React from 'react';
import '../App.css';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/logo-snoop.svg';

function Header() {
  return (
      <>
      <Navbar bg="light" expand="lg" style={{height: '6rem', backgroundColor: 'white!important'}}>
      <Navbar.Brand href="#home"><img alt="logo" src={logo} style={{width: '3rem'}}></img></Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" style={{ fontFamily: 'serif', fontStyle: 'italic', fontWeight: '700', fontSize: '1.3rem'}}>
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