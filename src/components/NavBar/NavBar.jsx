import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import NavDropdown from "react-bootstrap/NavDropdown"
import IconCart from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom' 
function NavBar() {
     return (
          <Navbar className="border-bottom container-fluid sticky-top" bg="light" variant="light" style={{height: '10vh'}}>
               <Navbar className="row col-12" bg="light" expand="lg">
                    <Container>
                         <Navbar.Brand mx={3}>
                              <Link to="/">
                                   Editorial Intelectos                              
                              </Link>
                         </Navbar.Brand>
                         <Navbar.Toggle aria-controls="basic-navbar-nav    " />
                         <Navbar.Collapse id="basic-navbar-nav">
                              <Nav className="me-auto align-items-center">
                                   <Link to="/">
                                        <span className="mx-3">Inicio</span>
                                   </Link>
                                   <Link to="/productos">
                                        <span className="mx-3">Productos</span>
                                   </Link>
                                   <NavDropdown title="Categorias" id="basic-nav-dropdown">
                                        <Link to="/categoria/rockArg">
                                            <span className="mx-3">Rock Nacional</span>
                                        </Link>
                                   <NavDropdown.Divider />
                                        <Link to="/categoria/folkloreArg">
                                             <span className="mx-3">Folklore</span>
                                        </Link>                                             
                                   <NavDropdown.Divider />
                                        <Link to="/categoria/trovador">
                                             <span className="mx-3">Trovador</span>
                                        </Link>
                                   <NavDropdown.Divider />
                                   </NavDropdown>
                                   <Link to='/cart'>
                                        <IconCart/>
                                   </Link>
                              </Nav>
                         </Navbar.Collapse>
                    </Container>
               </Navbar>
          </Navbar>
     )
}
export default NavBar
