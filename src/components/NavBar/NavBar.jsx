import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import NavDropdown from "react-bootstrap/NavDropdown"
import IconCart from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
function NavBar() {
     return (
          // navbar navbar-dark bg-primary
          <Navbar bg="success" variant="dark" style={{height: '20vh'}}>
               <Container fluid>
                    <Link to="/">
                         <Navbar.Brand>Editorial Intelectos</Navbar.Brand>                    
                    </Link>
               <Navbar.Toggle aria-controls="navbarScroll" />
               <Navbar.Collapse id="navbarScroll">
               <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
               >
                    <Link to="/">Inicio</Link>
                    <Link to="/">Productos</Link>
                    <Link to="/categoria/rockArg">Rock Nacional</Link>
                    <Link to="/categoria/folkloreArg">Folklore </Link>
                    <Link to="/categoria/trovador">Trova</Link>
                    <NavDropdown title="Contacto" id="navbarScrollingDropdown">
                         <NavDropdown.Item href="#action3">Redes</NavDropdown.Item>
                         <NavDropdown.Item href="#action4">Ubicación</NavDropdown.Item>
                    </NavDropdown>
                    {/* <Nav.Link href="#" disabled>
                    Link
                    </Nav.Link> */}
               </Nav>
                    <Link to='/cart'>
                         <IconCart/>
                    </Link>
               </Navbar.Collapse>
               </Container>
          </Navbar>
     )
}
export default NavBar
