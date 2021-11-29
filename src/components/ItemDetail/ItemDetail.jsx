import React,{useState,useEffect,useContext} from "react";
import {Card}from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom'
// tengo que importar el contexto
import { CartContext } from "../../context/CartContext"


// a item detail llega 1 sólo producto
const ItemDetail = ({prop_producto}) => {
     const [stock,setStock] = useState(0)
     // del contexto, llega la función *agregaCarrito*
     const {agregaCarrito} = useContext(CartContext)
     const [isLoading, setIsLoading] = useState(true)
     const [wasClick,setWasClicked] = useState(false)
    
     useEffect(() => {
          setStock(parseInt(prop_producto.stock));
          setIsLoading(false)
          console.log ('stock')
          console.log (prop_producto.stock);
     }, [prop_producto])

     function onAdd (count) {
          agregaCarrito({...prop_producto, cantidad: count},count);
          setWasClicked(true);
     }

     return (
          <>
          {
               !isLoading? 
                    <Card className="tarjeta" style={{ width: '40rem' }}>
                         <Card.Img variant="top" src={prop_producto.imgSource} />
                         <Card.Body>
                              <Card.Title>{prop_producto.titulo}</Card.Title>
                              <Card.Title>$ {prop_producto.pcio} - cod INT0{prop_producto.id} </Card.Title>
                              <Card.Text>
                                   {prop_producto.desc}
                              </Card.Text>
                              {
                                   wasClick ? (
                                   <Link to="/cart">
                                        <button className="btn btn-success"> LLEVAR AL CARRITO </button>
                                   </Link>
                                   )
                                   : (
                                        <ItemCount initial={1} stock={stock} onAdd={onAdd}/>
                                   )
                              }
                         </Card.Body>
                    </Card>
               :
               <h2>cargando</h2>
          }
          </>

     )
}
export default ItemDetail
