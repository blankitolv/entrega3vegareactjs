import React,{useState,useEffect,useContext} from "react";
import {Card}from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom'
// tengo que importar el contexto
import { CartContext } from "../../context/CartContext"

// a item detail llega 1 sólo producto
const ItemDetail = ({prop_producto,stock_producto}) => {
     const [stock,setStock] = useState(0)
     const [wasClick,setWasClicked] = useState(false)
    
     useEffect(() => {
          setStock(parseInt(stock_producto));
     }, [stock_producto])

     // del contexto, llega la función *agregaCarrito* y el estado de productos cargados *carList*
     const {agregaCarrito} = useContext(CartContext)

     function onAdd (count) {
          console.log ('se compraron '+count);
          agregaCarrito({...prop_producto, cantidad: count});
          setWasClicked(true);
     }

     return (
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
     )
}
export default ItemDetail
