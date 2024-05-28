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
       <Container fluid>
                <Row>
                    <Col xs={{ order: 1}} className='pt-5'>
                        <Row className='res-font'>
                            <h1>Little Lemon</h1>
                        </Row>
                        <Row className='subt-font pb-5'>
                            <h2>Chicago</h2>
                        </Row>
                        <Row className='para-font'>
                            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                        </Row>
                        <Row>
                            <Button variant='warning'>
                                Reserve a Table
                            </Button>
                        </Row>
                    </Col>
                    <Col sm={6} xs={{ order: 0}} className='text-center banImg order-md-1 order-sm-0'>
                            <Image src={Food} fluid rounded width="65%" />
                    </Col>
                </Row>
            </Container>
    </div>
  );
}

export default CallToAction;
