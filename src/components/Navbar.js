import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { CartWidget } from './CartWidget';

export const NavigationBar = () => {
  return(
    <Navbar bg="dark" expand="lg" variant="dark">
    <Container>
      <Navbar.Brand href="/">AgutStore</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/category/1">Ofertas</Nav.Link>
          <NavDropdown title="Desktop" id="basic-nav-dropdown">
            <NavDropdown.Item href="/category/2">Memoria Ram</NavDropdown.Item>
            <NavDropdown.Item href="/category/disco-duro">Disco duro</NavDropdown.Item>
            <NavDropdown.Item href="/category/ssd">SSD</NavDropdown.Item>
            <NavDropdown.Item href="/category/tarjeta-de-video">Tarjeta de video</NavDropdown.Item>
            <NavDropdown.Item href="/category/red">Tarjeta de red</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/category/mouse">Monitor</NavDropdown.Item>
            <NavDropdown.Item href="/category/mouse">Mouse</NavDropdown.Item>
            <NavDropdown.Item href="/category/teclado">Teclado</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/category/repuestos">Repuestos</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Laptop" id="basic-nav-dropdown">
            <NavDropdown.Item href="/category/3">Memoria Ram</NavDropdown.Item>
            <NavDropdown.Item href="/category/disco-duro">Disco duro</NavDropdown.Item>
            <NavDropdown.Item href="/category/ssd">SSD</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/category/mouse">Mouse</NavDropdown.Item>
            <NavDropdown.Item href="/category/teclado">Teclado</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/category/repuestos">Repuestos</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/contacto">Contacto</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/cart">
            <CartWidget count={2} />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
};
