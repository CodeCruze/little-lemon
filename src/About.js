import React from 'react';
import MarioAdrian from './images/Mario and Adrian A.jpg'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'


function About() {
  return (
    <>
      <Container>
        <Row>
          <Col className='d-flex justify-content-center align-items-center pt-5'>
            <Image className='about-img' src={MarioAdrian} rounded></Image>
          </Col>
        </Row>
      </Container>
      <Container className='d-flex align-items-center justify-content-center'>
        <Row className='about-sec'>
          <Col className='mb-auto py-5'>
            <h1 className='text-center py-5'>About Us</h1>
            <p className='text-center pb-5'>We are a group of passionate culinary entreprenuers, who are aiming to bring the Mediterranean genre of food to the modern era. We love our Mediterranean roots, and are proud of the incredible recipes passed down to us from our ancestors. We also love modern life, and we love the styles and artistic expression of the modern era. So we decided to put a modern twist on our traditional Mediterranean recipes!</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
