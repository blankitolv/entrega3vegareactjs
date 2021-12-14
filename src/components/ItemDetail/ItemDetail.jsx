import React,{useState,useEffect,useContext} from "react";
import { Image, Container } from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom'
// tengo que importar el contexto
import { CartContext } from "../../context/CartContext"
import { Spinner, Col } from "react-bootstrap";


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
               <Container className="container-fluid" >
                    <div className="col-lg-8 border p-3 main-section bg-white">
                         <div className="row hedding m-0 pl-3 pt-0 pb-3">
                              Detalle del producto
                         </div>
                         <div className="row m-0">
                              <div className="col-lg-4 left-side-product-box pb-3">
                                   <Image src={prop_producto.imgSource} alt={prop_producto.alt} className="border p-3" /> 
                              </div>
                              <div className="col-lg-8">
                                   <div className="right-side-pro-detail border p-3 m-0">
                                        <div className="row">
                                             <div className="col-lg-12">
                                                  <span>{prop_producto.cat}</span>
                                                  <p className="m-0 p-0">{prop_producto.titulo}</p>
                                             </div>
                                             <div className="col-lg-12">
                                                  <p className="m-0 p-0 price-pro">$ {prop_producto.pcio}</p>
                                                  <hr className="p-0 m-0"/>
                                             </div>
                                             <div className="col-lg-12 pt-2">
                                                  <h5>Detalle</h5>
                                                  <span>{prop_producto.desc}</span>
                                                  <hr className="m-0 pt-2 mt-2"/>
                                             </div>
                                             <div className="col-lg-12 mt-4">
                                                  <h6>Cantidad :</h6>
                                                  {
                                                  wasClick ? 
                                                  (
                                                       <>
                                                            <Link to="/cart">
                                                                 <Col md={12} className="mt-2">
                                                                      <button className="btn btn-success"> LLEVAR AL CARRITO </button>
                                                                 </Col>
                                                            </Link>
                                                                 <Col md={12} className="mt-2">
                                                                      <Link to="/">
                                                                           <button className="btn btn-outline-primary"> Seguir Comprando </button>
                                                                      </Link>
                                                                 </Col>
                                                       </>
                                                  )
                                                  : 
                                                       (
                                                       <ItemCount initial={1} stock={stock} onAdd={onAdd}/>
                                                       )
                                                  }
                                             </div>
                                        </div>    
                                   </div>
                              </div>
                         </div>                     
                    </div>
               </Container>


                    // <Container id="container2" className="
                    //      d-flex
                    //      align-items-center                
                    //      justify-content-center
                    //      mt-5
                    //      mb-5
                    //      flex-wrap" style={{width:'90%', height:'100vh'}}>
                    //      <Container className="d-flex flex-wrap justify-content-center m-3 p-2" style={{height:'100vh', minWidth:'42%', maxWidth:'45%', position:'relative'}}>
                    //           <Container className="fondo" style={{backgroundImage:`url(${prop_producto.imgSource})`,height:'100%',width:'100%'}}>
                    //           </Container>
                    //           <Container style={{position:'absolute',top:'10%'}} >
                    //                <Image src={prop_producto.imgSource} alt={prop_producto.alt} className="w-75" />
                    //           </Container>
                    //      </Container>
                    //      <Container className="border" style={{minHeight:'100vh', minWidth:'48%', maxWidth:'50%'}}>
                    //           <Row>
                    //                <Col md={12}>
                    //                     <h1 className="mt-5">{prop_producto.titulo}</h1>
                    //                </Col>
                    //           </Row>
                    //           <Row>
                    //                <Col>
                    //                     <p className="fs-3 text-uppercase">{prop_producto.cat}</p>
                    //                </Col>
                    //           </Row>
                    //           <Row>
                    //                <Col md={12}>
                    //                     <hr />                                   
                    //                </Col>
                    //           </Row>
                    //           <Row className="d-flex align-items-center justify-content-start mx-2" >
                    //                <Col md={4} className="bg-primary mt-4 rounded">
                    //                     <p className="text-white fs-5 mt-2 fw-bolder">$ {prop_producto.pcio}</p>
                    //                </Col>
                    //           </Row>
                    //           <Row className="mt-5">
                    //                <Col md={12}>
                    //                     <p>{prop_producto.desc}</p>
                    //                </Col>
                    //           </Row>
                    //           <Row md={12} xs={12}>
                    //                {
                    //                     wasClick ? (
                    //                     <Link to="/cart">
                    //                          <Col md={12}>
                    //                               <button className="btn btn-success"> LLEVAR AL CARRITO </button>
                    //                          </Col>
                    //                     </Link>
                    //                     )
                    //                     : 
                    //                     (
                              
                    //                          <ItemCount initial={1} stock={stock} onAdd={onAdd}/>                                             
        
                    //                     )
                    //                }
                    //           </Row>
                    //      </Container>
                    // </Container>
                    // ------------------------------------------------------
                    // <Container className="d-flex border border-secondary rounded justify-content-center p-2 w-100 min-vh-100 mt-5 mb-5">
                    //      <Container className="d-flex m-2 flex-wrap justify-content-around" style={{width:'90%'}}>
                    //             relative
                    //           <Container className="rounded m-2 min-vh-100 d-flex justify-content-center" style={{position:'relative',width:'40%'}}>
                    //                <Container className="fondo bg-primary w-100 h-100" style={{backgroundImage:`url(${prop_producto.imgSource})`}}>
                    //                </Container>
                    //                <Container style={{position:'absolute',top:'10%'}}>
                    //                     <Image src={prop_producto.imgSource} alt={prop_producto.alt} className="w-100 image"/>
                    //                </Container>


                    //           </Container>
                    //           <Container className="border bg-success rounded d-flex align-items-center justify-content-start flex-column m-2" style={{width:'50%'}} >
                    //                <h1 className="mt-5">{prop_producto.titulo}</h1>
                    //                <p className="fs-3 text-uppercase">{prop_producto.cat}</p>
                    //                <hr className="w-100"></hr>
                    //                <div className="container bg-primary mt-4 rounded d-flex align-items-center justify-content-center">
                    //                     <p className="text-white fs-5 fw-bolder">$ {prop_producto.pcio}</p>
                    //                </div>
                    //                <div className="container mt-4 ">
                    //                     <p className="text-start text-black fs-5">{prop_producto.desc}</p>
                    //                </div>
                    //                <div className="container mt-4 ">
                    //                     <p className="text-start text-black fs-5">
                    //                          El cancionero contiene canciones propia de la banda en un formato anillado y cuenta con acordes dibujados para aprender la canción que tanto te gusta
                    //                     </p>
                    //                </div>

                    //                {/* <Container className="w-100 align-items-start"> */}
                    //                          {/* <Container className="bg-primary text-white d-flex justify-content-center align-items-center " style={{width: "6rem",height:"3rem"}}> */}
                    //                          {/* </Container> */}
                    //                {/* </Container> */}
                    //                {
                    //                     wasClick ? (
                    //                     <Link to="/cart">
                    //                          <button className="btn btn-success"> LLEVAR AL CARRITO </button>
                    //                     </Link>
                    //                     )
                    //                     : (
                    //                          <ItemCount initial={1} stock={stock} onAdd={onAdd}/>
                    //                     )
                    //                }
                    //           </Container>
                    //      </Container>
                    // </Container>
                    :
                    <>
                         <Spinner animation="grow" size="sm" />
                         <h2>cargando</h2>
                         <Spinner animation="grow" />
                    </>
                    // <Card className="tarjeta" style={{ width: '40rem' }}>
                    //      <Card.Img variant="top" src={prop_producto.imgSource} />
                    //      <Card.Body>
                    //           <Card.Title>{prop_producto.titulo}</Card.Title>
                    //           <Card.Title>$ {prop_producto.pcio} - cod INT0{prop_producto.id} </Card.Title>
                    //           <Card.Text>
                    //                {prop_producto.desc}
                    //           </Card.Text>
                    //           {
                    //                wasClick ? (
                    //                <Link to="/cart">
                    //                     <button className="btn btn-success"> LLEVAR AL CARRITO </button>
                    //                </Link>
                    //                )
                    //                : (
                    //                     <ItemCount initial={1} stock={stock} onAdd={onAdd}/>
                    //                )
                    //           }
                    //      </Card.Body>
                    // </Card>
               
          }
          </>

     )
}
export default ItemDetail
