import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

import Image from 'react-bootstrap/Image';
import Food from './restauranfood.jpg';

function CallToAction() {
  return (
    <div className='banner'>
       <Container>
                <Row>
                    <Col className='pt-5'>
                        <Row className='res-font'>
                            <h1>Little Lemon</h1>
                        </Row>
                        <Row className='subt-font pb-5'>
                            <h2>Chicago</h2>
                        </Row>
                        <Row className='para-font'>
                            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                        </Row>
                    </Col>
                    <Col sm={6} className='text-center banImg'>
                            <Image src={Food} fluid rounded width={"60%"} />
                    </Col>
                </Row>
            </Container>
    </div>
  );
}

export default CallToAction;