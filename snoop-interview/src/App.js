import React from 'react';
import './App.css';
import Header from './components/Header';
import MainPage from './components/MainPage';
import SecondaryPage from './components/SecondaryPage';
import Carrousel from './components/Carrousel';
import Footer from './components/Footer';
import moreIcon from './assets/circulos.svg';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  // posibility to change backGroudColor of all sections
  var brandColor = '#ff0000';
  return (
    <div className="App">
      <Container fluid>
      <Row>
        <Col xs={11} style={{position: 'relative',paddingRight: '0', marginRight: '-1rem',    maxWidth: '97%', left: '-1rem'}}> 
          <Header/>
          <MainPage backgroundColor={brandColor}/>
          <Carrousel backgroundColor={brandColor}/>
          <SecondaryPage/>
        </Col>
        <Col xs={1} style={{
          backgroundColor: 'white',
          maxWidth: '3%',
          right: '-0rem',
          position: 'relative',
          padding: '0rem',
          margin: '0',
          zIndex: '11'
        }}>
          <img src={moreIcon} alt='main-img' className="more-img"></img>
        </Col>
      </Row>
      <Footer/>
      </Container>
    </div>
  );
}

export default App;
