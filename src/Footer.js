import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return(
        <footer>
            <Container>   
                <Row>
                    <Col>
                        <h3>Navigation</h3>
                        <ul>
                            <li><a href='/'>Home</a></li>
                            <li><a href='/'>About</a></li>
                            <li><a href='/'>Menu</a></li>
                            <li><a href='/'>Reservations</a></li>
                            <li><a href='/'>Order Online</a></li>
                            <li><a href='/'>Login</a></li>
                        </ul>
                    </Col>
                    <Col>
                        <h3>Contact</h3>
                        <ul>
                            <li><a href='/'>Address</a></li>
                            <li><a href='/'>Phone Number</a></li>
                            <li><a href='/'>Email</a></li>
                        </ul>
                    </Col>
                    <Col>
                        <h3>Social Media</h3>
                        <ul>
                            <li><a href='/'>Facebook</a></li>
                            <li><a href='/'>Instagram</a></li>
                            <li><a href='/'>Twitter</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;