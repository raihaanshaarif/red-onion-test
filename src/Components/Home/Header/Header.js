import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import logo from '../../../Images/logo2.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar>
                <Container>
                    <Navbar.Brand href="#home"> <img className='logo' src={logo} alt="" /> </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Nav.Link className='text-dark' ><i className="fas fa-shopping-cart"></i></Nav.Link>
                    <Nav.Link className='text-dark'> <Link to='/login'>Log in</Link> </Nav.Link>
                    <Nav.Link > <button className='btn btn-danger'> <Link to='/signup'>Sign up</Link> </button> </Nav.Link>

                    
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;