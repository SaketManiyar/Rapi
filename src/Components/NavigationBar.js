import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

export default function NavigationBar() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <NavbarToggle />
          <Navbar.Collapse>
            <Nav className="navdroptext">
              <Nav.Link href="movies">Movies</Nav.Link>
              <Nav.Link href="food">Food Recipes</Nav.Link>
              <Nav.Link href="weather">Weather</Nav.Link>
              <Nav.Link href="books">Books</Nav.Link>
              <Nav.Link href="songs">Song Lyrics</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
