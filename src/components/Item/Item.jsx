import React from "react";
import {Card, Button, Container} from "react-bootstrap"
import { Link } from 'react-router-dom'
function Item({unProducto}) {
          return (
               <>
                    <Link to={`/item/${unProducto.id}`}>
                         <Container className="cadaTarjeta">
                              <Card className="unaTarjeta" style={{ width: '18rem' }}>
                                   <Card.Img variant="top" src={unProducto.imgSource} alt={unProducto.alt} />
                                   <Card.Body>
                                        <Card.Title>{unProducto.title}</Card.Title>
                                        <Button variant="success">Ver producto</Button>
                                   </Card.Body>
                              </Card>               
                         </Container>
                    </Link>
               </>
          )
}
export default Item;
