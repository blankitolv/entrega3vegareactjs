import React,{useState,useEffect,useContext} from "react";
import { Image } from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom'
// tengo que importar el contexto
import { CartContext } from "../../context/CartContext"
import { Container, Spinner } from "react-bootstrap";


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
                    <Container className="border border-secondary rounded p-2 d-flex flex-wrap w-100 min-vh-100 mt-5 mb-5 justify-content-start">
                         <Container className="w-90 d-flex m-2">
                              <Container className="border rounded m-2  min-vh-100 w-40 d-flex justify-content-center " style={{position:'relative'}}>
                                   <Container className="fondo bg-primary w-100 h-100" style={{backgroundImage:`url(${prop_producto.imgSource})`}}>
                                   </Container>
                                   <Container style={{position:'absolute',top:'10%'}}>
                                        <Image src={prop_producto.imgSource} alt={prop_producto.alt} className="w-100 image"/>
                                   </Container>
                              </Container>
                              <Container className="border rounded d-flex align-items-center w-40 justify-content-start flex-column m-2 ">
                                   <h1 className="mt-5">{prop_producto.titulo}</h1>
                                   <p className="fs-3 text-uppercase">{prop_producto.cat}</p>
                                   <hr className="w-100"></hr>
                                   <div className="container bg-primary mt-4 rounded d-flex align-items-center justify-content-center">
                                        <p className="text-white fs-5 fw-bolder">$ {prop_producto.pcio}</p>
                                   </div>
                                   <div className="container mt-4 ">
                                        <p className="text-start text-black fs-5">{prop_producto.desc}</p>
                                   </div>
                                   <div className="container mt-4 ">
                                        <p className="text-start text-black fs-5">
                                             El cancionero contiene canciones propia de la banda en un formato anillado y cuenta con acordes dibujados para aprender la canción que tanto te gusta
                                        </p>
                                   </div>

                                   {/* <Container className="w-100 align-items-start"> */}
                                             {/* <Container className="bg-primary text-white d-flex justify-content-center align-items-center " style={{width: "6rem",height:"3rem"}}> */}
                                             {/* </Container> */}
                                   {/* </Container> */}
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
                              </Container>
                         </Container>


                    </Container>
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
