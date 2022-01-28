import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { CartWidget } from './CartWidget';

export const NavigationBar = () => {
  return(
    <Navbar bg="dark" expand="lg" variant="dark">
    <Container>
      <Navbar.Brand href="#home">AgutStore</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Ofertas</Nav.Link>
          <NavDropdown title="Desktop" id="basic-nav-dropdown">
            <NavDropdown.Item href="#memoria-ram">Memoria Ram</NavDropdown.Item>
            <NavDropdown.Item href="#disco-duro">Disco duro</NavDropdown.Item>
            <NavDropdown.Item href="#ssd">SSD</NavDropdown.Item>
            <NavDropdown.Item href="#tarjeta-de-video">Tarjeta de video</NavDropdown.Item>
            <NavDropdown.Item href="#red">Tarjeta de red</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#mouse">Monitor</NavDropdown.Item>
            <NavDropdown.Item href="#mouse">Mouse</NavDropdown.Item>
            <NavDropdown.Item href="#teclado">Teclado</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#repuestos">Repuestos</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Laptop" id="basic-nav-dropdown">
            <NavDropdown.Item href="#memoria-ram">Memoria Ram</NavDropdown.Item>
            <NavDropdown.Item href="#disco-duro">Disco duro</NavDropdown.Item>
            <NavDropdown.Item href="#ssd">SSD</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#mouse">Mouse</NavDropdown.Item>
            <NavDropdown.Item href="#teclado">Teclado</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#repuestos">Repuestos</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#contacto">Contacto</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#cart">
            <CartWidget count={2} />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
};
