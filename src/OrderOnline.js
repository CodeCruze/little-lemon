import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';




function OrderOnline() {
  return (
    <>
        <Container>
          <Row className='d-flex align-items-center justify-content-center'>
            <Col sm={12} className='mb-auto pt-5'>
              <h1 className='text-center py-5'>Check out our online menu and order now!</h1>
            </Col>
            <Col md={{ span: 6, offset: 4 }} className='mb-auto'>
              <Button className='btn btn-warning mb-5' >Order Online</Button>
            </Col>
          </Row>
        </Container>
    </>
  );
}

export default OrderOnline;
