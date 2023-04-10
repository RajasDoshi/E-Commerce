import React from 'react'
import { Navbar,Nav,Container,NavDropdown } from 'react-bootstrap'
const header = () =>{
    return (
        <>
     
    <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            &nbsp;    Cart</Nav.Link>
            <Nav.Link href="#link">
            <i className="fa-solid fa-user"></i>
            &nbsp;    Sign-in</Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    );
};
export default header;