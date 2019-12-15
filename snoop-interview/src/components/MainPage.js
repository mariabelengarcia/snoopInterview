import React from 'react';
import '../App.css';
import CardBox from './CardBox'
import MainImage from '../assets/main-picture-chairs.jpg';
import { Container, Row, Col } from 'react-bootstrap';

function MainPage() {
  return (
    <Container fluid style={{height: '55rem',backgroundColor: 'red'}}>
      <Row>
        <Col xs={12} className="main-img-container" style={{height: '55rem', position: 'relative', zIndex: '10'}}>
          <CardBox/>
          <img className="main-img" src={MainImage} alt='main-img'></img>
        </Col>
      </Row>
     </Container>
  );
}

export default MainPage;