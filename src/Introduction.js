import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Restaurant from './restaurant.jpg';
import Salad from './images/greek salad.jpg'
import BookingForm from './BookingForm';

function Introduction() {
  return (
    <div className='intro'>
       <Container>
                <Row className='py-5'>
                    <Col sm={6} className='text-center'>
                            <Image src={Restaurant} fluid rounded />
                    </Col>
                    <Col className='pt-5'>
                        <Row className=''>
                            <h1>Your Local Mediterranean Restaurant</h1>
                        </Row>
                        <Row className=''>
                            <p>Dine in our sleek and modern, yet cozy restaurant! Located in a beautiful area. We love our community in Chicago, and it is very important to us to provide a beautiful high end dining experience to our neighborhood, at affordable pricing.</p>
                        </Row>
                        <Row>
                            <Button variant='warning'>
                                See Where We Are Located
                            </Button>
                        </Row>
                    </Col>
                    
                </Row>
        </Container>
        <BookingForm />
    </div>
    
  );
}

export default Introduction;