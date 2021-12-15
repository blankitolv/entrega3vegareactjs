import React from "react";
import {Card, Button, Container} from "react-bootstrap"
import { Link } from 'react-router-dom'
// librería de animate.css para animar cada uno de los items
import {Animated} from "react-animated-css";
function Item({unProducto}) {
          return (
               <>
                    <Link to={`/item/${unProducto.id}`}>
                         <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                              <Container className="cadaTarjeta">
                                   <Card className="unaTarjeta" style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={unProducto.imgSource} alt={unProducto.alt} />
                                        <Card.Body>
                                             <Card.Title> {unProducto.titulo} </Card.Title>
                                             <Button variant="success">Ver producto</Button>
                                        </Card.Body>
                                   </Card>               
                              </Container>
                         </Animated>
                    </Link>
               </>
          )
}
export default Item;
