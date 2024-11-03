import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidgetComponent from "../CartWidgetComponent/CartWidgetComponent";
import "./NavBar.css";

import { Link } from "react-router-dom";

export const NavBarComponent = () => {
  return (
    <Navbar className="nav">
      <Container>
        {/* Brand */}
        <Navbar.Brand className="brand" href="/">
          Tienda Marcelo
        </Navbar.Brand>
        {/* Toggle */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Menu */}
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/">Productos</Nav.Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                <Link to={"/category/laptops"}>Laptops</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <Link to={"/category/smartphones"}>Smartphones</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/create">Crear producto</Nav.Link>
          </Nav>

          {/* Link to cart */}
          <Nav.Link className="Link" href="/cart">
            <CartWidgetComponent />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
