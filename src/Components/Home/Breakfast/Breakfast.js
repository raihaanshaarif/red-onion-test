import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Breakfast.css'

const Breakfast = ({breakfast}) => {
    const {name, image, description, price} = breakfast
    return (
        <div>
            <Col>
                <Card className='product-card'>
                    <Card.Img className='product-img' variant="top" src={image} />
                    <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text><small> {description} </small> </Card.Text>
                    <h4>${price}</h4>
                    </Card.Body>
                </Card>
            </Col> 
        </div>
    );
};

export default Breakfast;