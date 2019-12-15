import React from 'react';
import './App.css';
import Header from './components/Header';
import MainPage from './components/MainPage';
import SecondaryPage from './components/SecondaryPage';
import Carrousel from './components/Carrousel';
import Footer from './components/Footer';
import moreIcon from './assets/more.svg';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
     <Header />
      <Container fluid>
      <Row>
        <Col xs={11} style={{position: 'relative',paddingRight: '0', marginRight: '-1rem',    maxWidth: '97%', left: '-1rem'}}> 
          <MainPage/>
          <Carrousel/>
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
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
