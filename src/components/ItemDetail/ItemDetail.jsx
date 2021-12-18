import React,{ useState, useEffect, useContext } from "react";
import { Image, Container } from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom'
import { CartContext } from "../../context/CartContext"
import { Col } from "react-bootstrap";


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
																		<Link to="/productos">
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
				:
					<>
					</>               
			}
		</>
	)
}
export default ItemDetail
