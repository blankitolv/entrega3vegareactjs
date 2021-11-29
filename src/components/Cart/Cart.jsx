import React,{useContext,useState,useEffect} from "react";
import { CartContext } from "../../context/CartContext";
import {Table,Button} from "react-bootstrap";
import { Link } from 'react-router-dom';

function Cart() {
     const {carList,removeItem,clearCarrito,totalCompra,montoCompra} = useContext(CartContext);
     const [tieneArticulos, setTieneArticulos] = useState(false)

     const handleRemove=(id)=>{
          removeItem(id);
     }
     const handleRemoveAll=()=>{
          clearCarrito()
     }

     const hasCarList = () => {
          carList.length === 0 ? setTieneArticulos(false) : setTieneArticulos(true);
     }
     useEffect(() => {
          hasCarList();
          totalCompra();
     }, [handleRemove,handleRemoveAll,tieneArticulos])

     return (
          <>
               <h1>Carrito de compras</h1>
               {
                    tieneArticulos === true? (   
                    <Table striped bordered hover>
                         <thead>
                              <tr>
                                   <th>#cod</th>
                                   <th>Titulo</th>
                                   <th>Cantidad</th>
                                   <th>Precio</th>
                                   <th>subTotal</th>
                                   <th>Accion</th>
                              </tr>
                         </thead>
                         <tbody>
                              {carList.map( (unItem) =>
                                   <tr key={unItem.id}>
                                        <td>INT0{unItem.id}</td>
                                        <td>{unItem.titulo}</td>
                                        <td>{unItem.cantidad}</td>
                                        <td>{unItem.pcio}</td>
                                        <td>{unItem.pcio*unItem.cantidad}</td>
                                        <td>
                                             <Button variant="outline-danger" onClick={()=>handleRemove(unItem.id)}>X</Button>{' '}
                                        </td>
                                   </tr>
                              )}
                              <tr key='999'>
                                   <td></td>
                                   <td></td>
                                   <td></td>
                                   <td>Total</td>
                                   <td> <strong> $ {montoCompra} </strong> </td>
                                   <td></td>
                              </tr>
                         </tbody>
                    </Table>
                    ) : 
                    <>
                         <h2>El carrito se encuentra vacío</h2>
                         <p>
                              <Link to ="/">Ir a la pagina principal</Link> para sumar productos al carrito
                         </p>
                    </>
               }
               <Button variant="outline-danger" onClick={()=>handleRemoveAll()}>Vaciar Carrito</Button>            
          </>
     )
}
export default Cart;