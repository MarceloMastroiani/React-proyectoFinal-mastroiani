import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetComponent from '../CartWidgetComponent/CartWidgetComponent'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShirt} from '@fortawesome/free-solid-svg-icons';
const NavBarComponent = () => {

  return (
    <Navbar expand="lg" className="nav">
      <Container>
        <Navbar.Brand href="#inicio" className='brand'>Marcelo <FontAwesomeIcon icon={faShirt} style={{color: "#000000",}} /> Mastroiani</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#product">Productos</Nav.Link>
            <NavDropdown title="Categoria" id="basic-nav-dropdown">
              <NavDropdown.Item href="#remeras">Remeras</NavDropdown.Item>
              <NavDropdown.Item href="#accesorios">Accesorios</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidgetComponent />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;