import React,{ useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { Table, Button, Form, Container, Col } from "react-bootstrap";
import Alert from 'react-bootstrap/Alert'
import { Link } from 'react-router-dom';
import { getFireStore } from '../../services/getFirestore'
import firebase from 'firebase'
import 'firebase/firestore'
// import Error from "../Error/Error";

// Utilizé useHistory para pushear si hay algún error en el email y redireccionar
// el navegador a "error"
import { useHistory } from 'react-router-dom'
//Estoy utilizando la librería Lottie que habilita la reproducción de animaciones 
// (comúnmente llamado lottie) que son animaciones en formato JSON
import Lottie from "react-lottie";
import lottieSadBox from "../../gif/33740-sad-empty-box.json"

function Cart() {
     const defAutoAnim = {
          loop:true,
          autoplay:true,
          rendererSettings: {
               preserveAspectRatio: "xMidYMid slice"
          }
     }
     
     const history = useHistory();
     const {carList,removeItem,clearCarrito,totalCompra,montoCompra} = useContext(CartContext);
     const [tieneArticulos, setTieneArticulos] = useState(false)
     const [nombreCompleto, setNombreCompleto] = useState('')
     const [telefono, setTelefono] = useState('')
     const [email, setEmail] = useState('')
     const [email2, setEmail2] = useState('')
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
     const emailAreEquals = () =>{
          let aux;
          if (email.toUpperCase()===email2.toUpperCase()) {
               aux=true;
          } else {
               aux=false;
               setAlertaMail(false)
          }
          return aux;
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
               console.log (response.id)
          })
          .then ( () => handleRemoveAll() )
          .catch (err=> console.log (err))
          .finally (()=> setAlerta(true) );
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
                         <Alert variant="success" h-100="true">
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
                              </p>
                         </Alert>
                    :
                    <>
                         <h1 className="h3">Carrito de compras</h1>
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
                                                            <Form.Control className="xs" type="text" placeholder="donrodrigo@altavista.com" value={email2} onChange={event=>setEmail2(event.target.value)}/>
                                                       </Form.Group>
                                                       {/* <Button variant="primary" type="submit">
                                                       Submit
                                                  </Button> */}
                                                  </Form>      
                                             </Col>
                                        </Container>
                                        <Button variant="outline-primary" onClick={ () => {
                                             if (emailAreEquals===true) {
                                                  console.log (emailAreEquals())
                                                  ordenDeCompra()
                                             } else {
                                                  console.log ('estoy redireccionando...');
                                                  history.push('/Error');
                                             }
                                        }}> Finalizar la compra </Button>
                                        {/* <Button variant="outline-primary" onClick={()=>ordenDeCompra()}> Finalizar la compra </Button> */}
                                   </>    
                              ) : <>
                                        <div className="div" style={{ width: '100%', display:'flex', alignItems:'center', justifyContent:'center' }}>
                                             <Link to="/" className="lottieSadBox">
                                                  <Lottie options={{animationData:lottieSadBox,...defAutoAnim}} height={300} width={300}/>
                                             </Link>
                                        </div>
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