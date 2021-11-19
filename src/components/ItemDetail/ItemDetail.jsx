import React,{useState,useEffect} from "react";
import {Card}from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom'
// import { CartContext } from "../../context/CartContext"

const ItemDetail = ({prop_producto,stock_producto}) => {
     const [stock,setStock] = useState(0)
     const [wasClick,setWasClicked] = useState(false)
     useEffect(() => {
          setStock(parseInt(stock_producto));
     }, [stock_producto])

     // const {agregaCarrito,carList} = useContext(CartContext)

     function onAdd (count) {
          console.log ('se compraron '+count);
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
