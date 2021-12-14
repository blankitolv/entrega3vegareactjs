import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import NavDropdown from "react-bootstrap/NavDropdown"
import IconCart from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom' 
function NavBar() {
     return (
          <Navbar className="border-bottom container-fluid" bg="light" variant="light" style={{height: '20vh'}}>
               <Navbar bg="light" expand="lg">
                    <Container>
                         <Navbar.Brand>
                              <Link to="/">
                                   Editorial Intelectos                              
                              </Link>
                         </Navbar.Brand>
                         <Navbar.Toggle aria-controls="basic-navbar-nav    " />
                         <Navbar.Collapse id="basic-navbar-nav">
                              <Nav className="me-auto">
                                   <Link to="/">
                                        Inicio
                                   </Link>
                                   <NavDropdown title="Categorias" id="basic-nav-dropdown">
                                        <Link to="/categoria/rockArg">
                                             Rock Nacional
                                        </Link>
                                   <NavDropdown.Divider />
                                        <Link to="/categoria/folkloreArg">
                                             Folklore
                                        </Link>                                             
                                   <NavDropdown.Divider />
                                        <Link to="/categoria/trovador">
                                             Trovador
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
