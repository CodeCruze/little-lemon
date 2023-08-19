import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

function Name(){ 

  return (
    <Container className='name'>
        <Row>
            <Col className='d-flex justify-content-center'>
                <InputGroup>
                    <InputGroup.Text>Name:</InputGroup.Text>
                    <Form.Control as="textarea" aria-label="With textarea" />
                </InputGroup>
            </Col>
        </Row>
    </Container>
    );

}
export default Name;