import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import CartWidgetComponent from "../CartWidgetComponent/CartWidgetComponent";
import "./NavBar.css";

export const NavBarComponent = () => {
  return (
    <div className="nav">
      {/* Brand */}
      <Navbar.Brand className="brand" href="/home">
        Tienda Marcelo
      </Navbar.Brand>

      {/* Menu */}
      <Nav className="navMenu">
        <a className="botonLink" href="/home">
          Inicio
        </a>
        <a className="botonLink" href="/products">
          Productos
        </a>
      </Nav>

      {/* Link to cart */}
      {/* <Nav.Link className="Link" href="/cart">
        <CartWidgetComponent />
      </Nav.Link> */}
    </div>
  );
};
