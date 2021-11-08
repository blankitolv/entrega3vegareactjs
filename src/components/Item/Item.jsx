import React from "react";
import {Card,Button} from "react-bootstrap"
function Item({nombre, urlImagen}) {
     return (
          <>
               <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={urlImagen} alt="" />
                    <Card.Body>
                         <Card.Title>{nombre}</Card.Title>
                         <Card.Text>
                              Some quick example text to build on the card title and make up the bulk of
                              the card's content.
                         </Card.Text>
                         <Button variant="primary">Ver Cancionero</Button>
                    </Card.Body>
               </Card>
          </>
     )
}
export default Item;