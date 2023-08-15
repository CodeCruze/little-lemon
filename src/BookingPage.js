import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Restaurant from './restaurant.jpg'

function BookingPage(){
    return(
        <main>
            <Container style={{
        backgroundImage: `url(${Restaurant})`,
        height: '50vh',
        backgroundSize: 'cover'
       }}>
                <Row className='res-font'>
                    <h1>Make A Reservation!</h1>
                </Row>
            </Container>
            <InputGroup>
                <InputGroup.Text>Name:</InputGroup.Text>
                <Form.Control as="textarea" aria-label="With textarea" />
            </InputGroup>
            <Container className='body-bottom'>
                <Row className='sel-comp'>
                    <Col>
                        <select id="number-of-people">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6+">6+</option>
                        </select>
                    </Col>
                    <Col>
                        <label for="number-of-people">Number of People</label>
                    </Col>
                </Row>
                <Row className='sel-comp'>
                    <Col>
                        <input type="date" id="date"></input>
                    </Col>
                    <Col>
                        <label for="date">Date Of Reservation</label>
                    </Col>
                </Row>
                <Row className='sel-comp'>
                    <Col>
                        <input type="time" id="time"></input>
                    </Col>
                    <Col>
                        <label for="time">Time Of Reservation</label>
                    </Col>
                </Row>
                <Row>
                    <Button variant="warning">Make A Reservation!</Button>
                </Row>
            </Container>
            
        </main>
    )
}

export default BookingPage;