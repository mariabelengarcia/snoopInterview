
import React, { Component } from 'react';
import './Carrousel.css';
import { Button } from 'react-bootstrap';
import CoffeeImage from '../assets/coffee-image.jpg';
import { Container, Row, Col } from 'react-bootstrap';

class Carrousel extends Component {

  constructor(props) {
    super(props);
    this.state = {
        itemsArray : ['$70','$71','$72','$73','$74','$75']
    };
  }

  getBox = () => {
    return (<img className="carousel-img" src={CoffeeImage} alt='main-img'></img>);
  }

  handleBack = () => {
    var itemsArrayAux = this.state.itemsArray.pop();
    var itemsArrayAux2 = this.state.itemsArray.unshift(itemsArrayAux);
    this.setState((state) => ({
        itemsArray: state.itemsArray
    }));
  }
  
  handleNext = () => {
    var itemsArrayAux = this.state.itemsArray.shift();
    var itemsArrayAux2 = this.state.itemsArray.push(itemsArrayAux);
    this.setState((state) => ({
        itemsArray: state.itemsArray
    }));
  }
  render(props) {
  return (
    <Container fluid className='carousel-container' style={{backgroundColor: this.props.backgroundColor}}>
        <Row style={{width: '80%', margin: 'auto', fontSize: '3.2rem', fontFamily: 'Barlow',
              position: 'relative', left: '6rem'}}>
            <span>Nullam sed urna justo.</span>
        </Row>
        <Row style={{width: '80%', margin: 'auto', position: 'relative', zIndex: '11'}}>
            <Button variant="outline-light" style={{backgroundColor: this.props.backgroundColor, border: 'none', fontSize: '3rem' , marginTop: '2rem'}}  onClick={this.handleBack}> {`<`} </Button>
            { this.state.itemsArray.map(item => 
                <Col>
                    {this.getBox(item)}
                </Col>
            )}
            <Button variant="outline-light" style={{backgroundColor: this.props.backgroundColor, border: 'none', fontSize: '3rem', marginTop: '2rem'}}   onClick={this.handleNext}> {`>`} </Button>
	    </Row>
        <Row style={{width: '74.5%', margin: 'auto', marginTop: '.8rem', position: 'relative', zIndex: '11'}}>
             { this.state.itemsArray.map(item => 
                <Col>
                    <span className='carousel-img-detail-span'>
                        {item}
                    </span>
                </Col>
            )}
        </Row>
        <Row className="diagonal-red-carrousel-footer" style={{backgroundColor: this.props.backgroundColor}}>
        </Row>
    </Container>
  );
}
}

export default Carrousel;