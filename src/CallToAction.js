import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Food from './restauranfood-landscape.jpg';

function CallToAction() {
  return (

    <Card className="bg-dark">
      <Card.Img src={Food} alt="Card image"/>
      <Card.ImgOverlay className='d-flex flex-column justify-content-center align-items-center'>
        <div className='banner-text'>
        <Card.Title >
            <h1 className='res-font'>Little Lemon Restaurant</h1>
        </Card.Title>
        <Card.Text >
            <p className='para-font'>
                 We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
            </p>
        </Card.Text>
        <Card.Text>
        <Button variant='warning'>
            Reserve a Table
        </Button>
        </Card.Text>
        </div>
      </Card.ImgOverlay>
    </Card>
  );
}

export default CallToAction;
