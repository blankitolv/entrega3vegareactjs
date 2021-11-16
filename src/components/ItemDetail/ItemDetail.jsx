import React,{useState,useEffect} from "react";
import {Card,Button}from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount";
const ItemDetail = ({prop_producto,stock_producto}) => {

     useEffect(() => {
          setStock(parseInt(stock_producto));
     }, [stock_producto])

     console.log (parseInt(stock_producto))
     const [stock,setStock] = useState(0)
     const [item, setItem] = useState(0)

     const onAdd = () => {
          item + 1 <= stock ? setItem(item + 1) : alert ('sin más stock')
     }
     const onRes = () => {
          item - 1 >= 0 ? setItem(item-1) : setItem(0)
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
                    <ItemCount onAdd={onAdd} onRes={onRes}cantidad={item}/>
                    {/* <Button variant="primary">Agregar al carrito</Button> */}
               </Card.Body>
          </Card>
     )
}
export default ItemDetail
