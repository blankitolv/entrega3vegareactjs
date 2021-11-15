import React from "react";
import {Card,Button}from "react-bootstrap"
const ItemDetail = ({prop_producto}) => {
     return (
          <Card className="tarjeta" style={{ width: '40rem' }}>
               <Card.Img variant="top" src={prop_producto.imgSource} />
               <Card.Body>
                    <Card.Title>{prop_producto.titulo}</Card.Title>
                    <Card.Title>$ {prop_producto.pcio} - cod INT0{prop_producto.id}</Card.Title>
                    <Card.Text>
                         {prop_producto.desc}
                    </Card.Text>
                    <Button variant="primary">Agregar al carrito</Button>
               </Card.Body>
          </Card>
     )
}
export default ItemDetail
