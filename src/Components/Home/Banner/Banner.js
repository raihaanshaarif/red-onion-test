import React from 'react';
import './Banner.css'
import banner from '../../../Images/bannerbackground.png'
import { Button, FormControl, InputGroup } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className='wrapper'>
            <img className='banner img-fluid' src={banner} alt="" />
            <div className="search-wrapper">
            <InputGroup className="mb-3 search">
                <FormControl
                placeholder="Search food items"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                />
                <Button variant="btn btn-danger " id="button-addon2">
                Button
                </Button>
            </InputGroup>
  </div>
        </div>
    );
};

export default Banner;