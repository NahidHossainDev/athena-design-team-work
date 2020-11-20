import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import logoImg from '../images/Group 86.png'


const NavigationBar = () => {
    return (
<<<<<<< HEAD
        <div className="bg-header">
            <div className="nav-section">
                <div className="container">
                    <Navbar expand="lg">
                        <Navbar.Brand href="#home">
                            <img className="ml" style={{ height: '90px', }} src={logoImg} alt="" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <div className="nav">
                                <Nav className="nav  d-flex justify-content-end">
                                    <Nav.Link href="#home" activeClassName="active" className="px-4">Home</Nav.Link>
                                    <Nav.Link href="#about" className="px-4">About </Nav.Link>
                                    <Nav.Link href="#service" className="px-4">Service</Nav.Link>
                                    <Nav.Link href="#pricing" className="px-4">Pricing</Nav.Link>
                                    <Nav.Link href="#ourTeam" className="px-4">Our Team</Nav.Link>
                                </Nav>
                            </div>
                            <Button className="gradient-btn">Contact</Button>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
=======
        <div className="nav-section">
            <div>
                <Navbar expand="lg">
                    <Navbar.Brand href="#home">
                        <img className="ml" style={{ height: '90px', }} src={logoImg} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <div className="nav">
                            <Nav className="nav  d-flex justify-content-end">
                                <Nav.Link href="#home" activeClassName="active" className="px-4">Home</Nav.Link>
                                <Nav.Link href="#about" className="px-4">About </Nav.Link>
                                <Nav.Link href="#service" className="px-4">Service</Nav.Link>
                                <Nav.Link href="#pricing" className="px-4">Pricing</Nav.Link>
                                <Nav.Link href="#ourTeam" className="px-4">Our Team</Nav.Link>
                            </Nav>
                        </div>
              
                        <Button  className="gradient-btn"> <a href="#contact">Contact</a></Button>
                    </Navbar.Collapse>
                </Navbar>
>>>>>>> 890fd752b72bcaa1b11ba52719d9eb0efc22284a
            </div>
        </div>
    );
};

export default NavigationBar;