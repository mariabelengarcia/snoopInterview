import React from 'react';
import '../App.css';
import { Card } from 'react-bootstrap';

function CardBox() {
  return (
    <div className='main-page-info-box'>
        <Card style={{ zIndex: '10', position: 'relative', width: '24rem', textAlign: 'left', left: '17rem' }}>
        <Card.Body>
            <Card.Title style={{color:'red',fontSize: '2.2rem',fontWeight: 'bold'}}>LOREM IPSUM</Card.Title>
            <Card.Subtitle className="mb-2 text-dark" 
            style={{fontStyle: 'italic', padding: '1rem 0rem', fontWeight: 'bold', fontSize: '1.2rem'}}>
            Cras egestas risus sit amet
            </Card.Subtitle>
            <Card.Text style={{fontSize: '1.3rem'}}>
            Praesent vel purus urna. Sed nec tortor in justo vestibulum semper nec eu nibh.
            </Card.Text>
        </Card.Body>
        </Card>
    </div>
  );
}

export default CardBox;