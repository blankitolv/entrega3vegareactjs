import React from "react";
import {Card, Button} from "react-bootstrap"
import { Link } from 'react-router-dom'
function Item({unProducto, unaImagen}) {
          return (
               <Link to={`/item/${unProducto.id}`} className="cadaTarjeta">
                    <Card className="unaTarjeta" style={{ width: '18rem' }}>
                         <Card.Img variant="top" src={unProducto.imgSource} alt={unProducto.alt} />
                         <Card.Body>
                              <Card.Title>{unProducto.title}</Card.Title>
                              <Button variant="primary">Ver Cancionero</Button>
                         </Card.Body>
                    </Card>               
               </Link>
          )
}
export default Item;
