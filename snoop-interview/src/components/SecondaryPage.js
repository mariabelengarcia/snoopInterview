import React from 'react';
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import SecondaryImage from '../assets/adventure-blur-cellphone.jpg';

function SecondaryPage() {
  return (
    <Container fluid>
    <Row style={{height: '63rem',overflow: 'hidden'}}>
      <Row className="white-red-secondary-page-footer">
      </Row>
      <Row className="white-red-secondary-page-footer-vertical">
      </Row>
      <Col xs={5} className="secondary-img-container">
        <img className="secondary-img" src={SecondaryImage} alt='main-img'></img>
      </Col>
      <Col xs={7} style={{fontStyle: 'oblique', position: 'relative',left: '0rem',
        textAlign: 'left',marginTop: '-18rem',top:'0', transform: 'skew(13deg)' , maxWidth: '98rem',zIndex: '10' }}>
        <span style={{fontFamily: 'serif', fontWeight: '700', fontSize: '1.4rem', display: 'Block'}}>Pellentesque luctus</span>
        <span style={{fontSize: '1.4rem', fontFamily: 'serif', fontWeight: '400'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
        </span>
      </Col>
    </Row>
  </Container>
  );
}

export default SecondaryPage;