import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
  /*   return (
    <div className="main-menu">
      <ul>
        <li>HOME</li>
        <li>ABOUT US</li>
        <li>MINING</li>
        <li>COMMUNITY</li>
        <li>OPPORTUNITY</li>
        <li>NEWS</li>
      </ul>
    </div>
  ); */
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#about">ABOUT US</Nav.Link>
            <Nav.Link href="#mining">MINING</Nav.Link>
            <Nav.Link href="#community">COMMUNITY</Nav.Link>
            <Nav.Link href="#oportunity">OPPORTUNITY</Nav.Link>
            <Nav.Link href="#news">NEWS</Nav.Link>
            <Nav.Link href="#signin">SIGN IN</Nav.Link>
            <NavDropdown title="LANGUAGE" id="basic-nav-dropdown">
              <NavDropdown.Item href="#chinese">CHINESE</NavDropdown.Item>
              <NavDropdown.Item href="#english">ENGLISH</NavDropdown.Item>
              <NavDropdown.Item href="#spanish">SPANISH</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;
