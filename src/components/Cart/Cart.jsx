import React,{ useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { Table, Button, Form, Container, Col } from "react-bootstrap";
import Alert from 'react-bootstrap/Alert'
import { Link } from 'react-router-dom';
import { getFireStore } from '../../services/getFirestore'
import firebase from 'firebase'
import 'firebase/firestore'

function Cart() {
     const {carList,removeItem,clearCarrito,totalCompra,montoCompra} = useContext(CartContext);
     const [tieneArticulos, setTieneArticulos] = useState(false)
     const [nombreCompleto, setNombreCompleto] = useState('')
     const [telefono, setTelefono] = useState('')
     const [email, setEmail] = useState('')

     const [alerta, setAlerta] = useState(false)
     const [idCompra,setIdCompra] = useState('')

     
     const handleRemove=(id)=>{
          removeItem(id);
     }
     const handleRemoveAll=()=>{
          clearCarrito()
     }

     const hasCarList = () => {
          carList.length === 0 ? setTieneArticulos(false) :  setTieneArticulos(true);          
     }

     const ordenDeCompra=()=>{
          const orden={};
          orden.date = firebase.firestore.Timestamp.fromDate(new Date());
          orden.buyer = {
               name:nombreCompleto,
               email:email,
               phone:telefono
          }
               
          orden.total = montoCompra;
          orden.items = carList.map(element => {
               const id = element.id;
               const titulo = element.titulo;
               const precio = element.pcio * element.cantidad;
               return {id, titulo, precio}
          })

          const dbQuery = getFireStore()
          dbQuery.collection('orders').add(orden)
          .then ( response => {
               setIdCompra(response.id)
               setAlerta(true);
               console.log (response.id);
          })
          .catch (err=> console.log (err))
          .finally (()=> console.log ('fin add order'));
          console.log (orden);
     }


     useEffect(() => {
          hasCarList();
          totalCompra();
          // eslint-disable-next-line
     }, [handleRemove,handleRemoveAll,tieneArticulos])
     

     return (
          <>
               {  
                    alerta?
                    <Alert variant="success">
                         <Alert.Heading> Compra finalizada C:</Alert.Heading>
                         <p>
                              ¡PERFECTO! ya tenemos tus datos a la brevedad confirmaremos el pedido
                         </p>
                         <hr />
                         <p className="mb-0">
                              RESUMEN DE TUS DATOS <br/>
                              Nombre: {nombreCompleto} <br/>
                              Teléfono: {telefono} <br/>
                              Email: {email} <br/>
                              <b> Codigo de verificación de la compra {idCompra} </b> <br/>
                              Total de la compra {montoCompra}
                         </p>
                    </Alert> :
                    <>
                         <h1>Carrito de compras</h1>
                         {
                              tieneArticulos === true? (   
                                   <>
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
                                                            <td>INT0 {unItem.id}</td>
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
                                        <Button variant="outline-danger" onClick={()=>handleRemoveAll()}> Vaciar Carrito </Button>
                                        <Container fluid>
                                             <Col md={5} >
                                                  <Form >
                                                       <Form.Group className="xs mb-3" controlId="formBasicName">
                                                            <Form.Label>Ingrese su nombre</Form.Label>
                                                            <Form.Control type="text" placeholder="Don Rodrigo Diaz de Carreras" value={nombreCompleto} onChange={event=>setNombreCompleto(event.target.value)}/>
                                                       </Form.Group>
                                                       <Form.Group className="md mb-3" controlId="formBasicPhone">
                                                            <Form.Label>Ingrese su Telefono</Form.Label>
                                                            <Form.Control className="md" type="text" placeholder="3413xxxxxx" value={telefono} onChange={event=>setTelefono(event.target.value)} />
                                                       </Form.Group>
                                                       <Form.Group className="xs mb-3" controlId="formBasicEmail">
                                                            <Form.Label>Ingrese su Email</Form.Label>
                                                            <Form.Control className="xs" type="text" placeholder="donrodrigo@altavista.com" value={email} onChange={event=>setEmail(event.target.value)}/>
                                                       </Form.Group>
                                                       {/* <Button variant="primary" type="submit">
                                                       Submit
                                                  </Button> */}
                                                  </Form>      
                                             </Col>
                                        </Container>
                                        <Button variant="outline-primary" onClick={()=>ordenDeCompra()}> Finalizar la compra </Button>
                                   </>    
                              ) : <>
                                        <h2>El carrito se encuentra vacío</h2>
                                        <p>
                                             <Link to ="/">Ir a la pagina principal</Link> para sumar productos al carrito
                                        </p>
                                   </>
                         }
                    </>
               }
          </>
     )
}
export default Cart;