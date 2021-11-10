import React from "react";
import {Card, Button} from "react-bootstrap"
// -------- ESTOY EN TEST -> NO EN MASTER 
function Item({unProducto,unaImagen}) {
     //      {id:"1", imgSource:"https://i.ibb.co/d6T3r1c/c-CALAMARO.jpg", titulo: "Calamaro", pcio: 210, stock:"56", alt:"imagen cancionero"},

          return (

                    <Card className="unaTarjeta" style={{ width: '18rem' }}>
                         <Card.Img variant="top" src={unProducto.imgSource} alt={unProducto.alt} />
                         <Card.Body>
                              <Card.Title>{unProducto.title}</Card.Title>
                              <Card.Text>
                                   Some quick example text to build on the card title and make up the bulk of
                                   the card's content.
                              </Card.Text>
                              <Button variant="primary">Ver Cancionero</Button>
                         </Card.Body>
                    </Card>
          )
}
export default Item;
// -------- ESTOY EN TEST -> NO EN MASTER 