import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import NavDropdown from "react-bootstrap/NavDropdown"
import IconCart from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
function NavBar() {
     return (
          <Navbar className="border-bottom" bg="light" variant="light" style={{height: '20vh'}}>
               <Container fluid>
                    <Link className="noBlue" to="/">
                         <Navbar.Brand>Editorial Intelectos</Navbar.Brand>                    
                    </Link>
               <Navbar.Toggle aria-controls="navbarScroll" />
               <Navbar.Collapse id="navbarScroll">
               <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
               >
                    <Link className="noBlue navBarTitle" to="/">Inicio</Link>
                    <Link className="noBlue navBarTitle" to="/categoria/rockArg">Rock Nacional</Link>
                    <Link className="noBlue navBarTitle" to="/categoria/folkloreArg">Folklore </Link>
                    <Link className="noBlue navBarTitle" to="/categoria/trovador">Trova</Link>
                    <NavDropdown title="Contacto" id="navbarScrollingDropdown">
                         <NavDropdown.Item href="#action3">Redes</NavDropdown.Item>
                         <NavDropdown.Item href="#action4">Ubicación</NavDropdown.Item>
                    </NavDropdown>
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
