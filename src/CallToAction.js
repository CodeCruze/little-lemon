import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Food from './restauranfood.jpg';

function CallToAction() {
  return (
    <div className='banner'>
       <Container>
                <Row className='res-font'>
                    <h1>Little Lemon</h1>
                </Row>
                <Row className='subt-font'>
                    <h2>Chicago</h2>
                </Row>
                <Row>
                    <Col sm={6} className='mb-4 my-5'>
                        <Row className='para-font'>
                            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                        </Row>
                        <Row>
                            <Button variant='warning'>
                                Reserve a Table
                            </Button>
                        </Row>
                    </Col>
                    <Col sm={6} className='mb-4'>
                            <Image src={Food} fluid rounded />
                    </Col>
                </Row>
            </Container>
    </div>
  );
}

export default CallToAction;
