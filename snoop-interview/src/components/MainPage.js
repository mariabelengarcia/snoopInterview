import React from 'react';
import '../App.css';
import CardBox from './CardBox'
import MainImage from '../assets/mainPicture.png';
import { Container, Row, Col } from 'react-bootstrap';

function MainPage(props) {
  return (
    <Container fluid style={{height: '55rem',backgroundColor: props.backgroundColor}}>
      <Row>
        <Col xs={12} style={{height: '55rem', position: 'relative', zIndex: '10',
            background: `linear-gradient(90deg, ${props.backgroundColor} 0%, rgba(0,0,0,0.6474964985994398) 72%, ${props.backgroundColor} 100%)`}}>
          <CardBox/>
          <img className="main-img" src={MainImage} alt='main-img'
          style={{boxShadow: `0 0 20px 20px ${props.backgroundColor};`,
                  backgroundColor: `${props.backgroundColor};`}}></img>
        </Col>
      </Row>
     </Container>
  );
}

export default MainPage;