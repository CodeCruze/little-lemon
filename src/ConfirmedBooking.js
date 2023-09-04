import React from 'react';
import TopPart from './TopPart'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ConfirmedBooking(){


    return(
        <main>
            <TopPart />
        <Container className='p-5 ms-auto'>
            <Col className='p-5'>
                <Row>
                    <h1>Thank you for your reservation!</h1>
                </Row>
                <Row>
                    <h3>We look forward to having you dine with us!</h3>
                </Row>
                <Row>
                    <p>A confirmation has been sent to your email.</p>
                </Row>
            </Col>
        </Container>
        </main>
    )
}

export default ConfirmedBooking;