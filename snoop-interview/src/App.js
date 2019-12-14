import React from 'react';
import './App.css';
import Header from './components/Header'
import Carrousel from './components/Carrousel'
import MainImage from './assets/main-picture-chairs.jpg';
import { Container, Row, Col, Card } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
     <Header />
     <Container fluid>
      <Row>
        <Col xs={12} className="main-img-container">
          <div className='main-page-info-box'>
          <Card style={{ width: '18rem', textAlign: 'left' }}>
            <Card.Body>
              <Card.Title style={{color:'red',fontSize: '1.8rem',fontWeight: 'bold'}}>LOREM IPSUM</Card.Title>
              <Card.Subtitle className="mb-2 text-muted" 
              style={{fontWeight: 'bold', fontSize: '1.2rem', padding: '0.4rem 0 0.2rem 0',color: 'black !important'}}>
                Cras egestas risus sit amet
              </Card.Subtitle>
              <Card.Text>
                Praesent vel purus urna. Sed nec tortor in justo vestibulum semper nec eu nibh.
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
          <img className="main-img" src={MainImage} alt='main-img'></img>
        </Col>
      </Row>
    </Container>
    <Carrousel/>
  </div>
  );
}

export default App;
