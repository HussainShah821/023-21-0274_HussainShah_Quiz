import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-light text-dark">
      <Container>
        <Navbar.Brand href="#home">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="red" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
          </svg>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className={"text-dark"} href="#home">About</Nav.Link>
            <Nav.Link className={"text-dark"} href="#link">Contact us</Nav.Link>
            <Nav.Link className={"text-dark"} href="#link">TimeTable</Nav.Link>
            <Nav.Link className={"text-dark"} href="#link">Live Location</Nav.Link>
          </Nav>
          <Nav>
            <Button variant="danger">SignIn</Button>{' '}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
