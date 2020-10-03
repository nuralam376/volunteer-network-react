import React from "react";
import { Navbar, Nav, Container, Image, Button } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/" className="w-25">
            <Image src="/resources/logos/Group_1329.png" className="w-100" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/">Donation</Nav.Link>
              <Nav.Link href="/">Events</Nav.Link>
              <Nav.Link href="/">Blog</Nav.Link>
              <Nav.Link>
                <Button variant="primary">Register</Button>
              </Nav.Link>
              <Nav.Link>
                <Button variant="secondary">Admin</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
