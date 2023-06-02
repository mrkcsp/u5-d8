import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import ContactUs from "./ContactUs";

function Navigation() {
  const [showContactUs, setShowContactUs] = useState(false);

  return (
    <Navbar style={{ backgroundColor: "grey" }} expand="lg" sticky="top">
      <Container>
        <Link style={{ textDecoration: "none" }} to="/">
          <Navbar.Brand>EpiBooks</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Altro" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => setShowContactUs(true)}>
                Contattaci
              </NavDropdown.Item>
              <ContactUs
                show={showContactUs}
                onHide={() => setShowContactUs(false)}
              />
              <NavDropdown.Item href="#action/3.2">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Action</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
