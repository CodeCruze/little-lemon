import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

function Name( {name, setName} ){ 

  return (
    <Container className='name'>
        <Row>
            <Col className='d-flex justify-content-center'>
                <InputGroup>
                    <InputGroup.Text>Name:</InputGroup.Text>
                    <Form.Control as="textarea" aria-label="With textarea" value={name} onChange={(e) => setName(e.target.value)} />
                </InputGroup>
            </Col>
        </Row>
    </Container>
    );

}
export default Name;