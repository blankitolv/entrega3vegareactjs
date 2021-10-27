import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import NavDropdown from "react-bootstrap/NavDropdown"
import IconCart from '../CartWidget/CartWidget'
function NavBar() {
     return (
          // navbar navbar-dark bg-primary
          <Navbar bg="success" variant="dark" style={{height: '20vh'}}>
               <Container fluid>
               <Navbar.Brand href="#">Editorial Intelectos</Navbar.Brand>
               <Navbar.Toggle aria-controls="navbarScroll" />
               <Navbar.Collapse id="navbarScroll">
               <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
               >
                    <Nav.Link href="#action1">Inicio</Nav.Link>
                    <Nav.Link href="#action2">Productos</Nav.Link>
                    <NavDropdown title="Contacto" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Redes</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Ubicación</NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    {/* <NavDropdown.Item href="#action6">
                         Something else here
                    </NavDropdown.Item> */}
                    </NavDropdown>
                    {/* <Nav.Link href="#" disabled>
                    Link
                    </Nav.Link> */}
               </Nav>
                    <IconCart/>
               </Navbar.Collapse>
               </Container>
          </Navbar>
     )
}
export default NavBar
