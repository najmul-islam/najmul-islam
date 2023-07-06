"use client";
import { Container, Navbar, Nav, Offcanvas } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar expand="sm" fixed="top" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <span className="fw-bold">Najmul</span> Islam
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-sm`}
            aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
            placement="end"
          >
            <Offcanvas.Header closeButton className="border-bottom">
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                Najmul Islam
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="ms-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                <Nav.Link href="#resume">Resume</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
