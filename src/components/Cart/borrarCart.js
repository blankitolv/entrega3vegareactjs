// <Container fluid>
          //      <div className="col-lg-8 p-3 border border-secondary main-section">
          //           <div className="row">
          //                <div className="col-lg-12">
          //                     <h1>Mi carrito de compras</h1>
          //                </div>
          //           </div>
          //           <div className="row">
          //                <div className="col-lg-12">
          //                     {  
          //                          alerta?(
          //                               <Alert variant="success">
          //                                    <Alert.Heading> Compra finalizada C:</Alert.Heading>
          //                                    <p>
          //                                         ¡PERFECTO! ya tenemos tus datos a la brevedad confirmaremos el pedido
          //                                    </p>
          //                                    <hr />
          //                                    <p className="mb-0">
          //                                         RESUMEN DE TUS DATOS <br/>
          //                                         Nombre: {nombreCompleto} <br/>
          //                                         Teléfono: {telefono} <br/>
          //                                         Email: {email} <br/>
          //                                         <b> Codigo de verificación de la compra {idCompra} </b> <br/>
          //                                         Total de la compra {montoCompra}
          //                                    </p>
          //                               </Alert>,
          //                               handleRemoveAll()
          //                          )
          //                          :
          //                          <>
          //                               {
          //                                    tieneArticulos === true? (
          //                                    <>
          //                                         <Table striped bordered hover>
          //                                              <thead>
          //                                                   <tr>
          //                                                        <th>#cod</th>
          //                                                        <th>Titulo</th>
          //                                                        <th>Cantidad</th>
          //                                                        <th>Precio</th>
          //                                                        <th>subTotal</th>
          //                                                        <th>Accion</th>
          //                                                   </tr>
          //                                              </thead>
          //                                              <tbody>
          //                                                   {carList.map( (unItem) =>
          //                                                        <tr key={unItem.id}>
          //                                                             <td>INT0 {unItem.id}</td>
          //                                                             <td>{unItem.titulo}</td>
          //                                                             <td>{unItem.cantidad}</td>
          //                                                             <td>{unItem.pcio}</td>
          //                                                             <td>{unItem.pcio*unItem.cantidad}</td>
          //                                                             <td>
          //                                                                  <Button variant="outline-danger" onClick={()=>handleRemove(unItem.id)}>X</Button>{' '}
          //                                                             </td>
          //                                                        </tr>
          //                                                   )}
          //                                                   <tr key='999'>
          //                                                        <td></td>
          //                                                        <td></td>
          //                                                        <td></td>
          //                                                        <td>Total</td>
          //                                                        <td> <strong> $ {montoCompra} </strong> </td>
          //                                                        <td></td>
          //                                                   </tr>
          //                                              </tbody>
          //                                         </Table>
          //                                         <Button variant="outline-danger" onClick={()=>handleRemoveAll()}> Vaciar Carrito </Button>,
          //                                         <Container fluid>
          //                                              <Col md={5} >
          //                                                   <Form >
          //                                                        <Form.Group className="xs mb-3" controlId="formBasicName">
          //                                                             <Form.Label>Ingrese su nombre</Form.Label>
          //                                                             <Form.Control type="text" placeholder="Don Rodrigo Diaz de Carreras" value={nombreCompleto} onChange={event=>setNombreCompleto(event.target.value)}/>
          //                                                        </Form.Group>
          //                                                        <Form.Group className="md mb-3" controlId="formBasicPhone">
          //                                                             <Form.Label>Ingrese su Telefono</Form.Label>
          //                                                             <Form.Control className="md" type="text" placeholder="3413xxxxxx" value={telefono} onChange={event=>setTelefono(event.target.value)} />
          //                                                        </Form.Group>
          //                                                        <Form.Group className="xs mb-3" controlId="formBasicEmail">
          //                                                             <Form.Label>Ingrese su Email</Form.Label>
          //                                                             <Form.Control className="xs" type="text" placeholder="donrodrigo@altavista.com" value={email} onChange={event=>setEmail(event.target.value)}/>
          //                                                        </Form.Group>
          //                                                   </Form>      
          //                                              </Col>
          //                                         </Container>
          //                                         <Button variant="outline-primary" onClick={()=>ordenDeCompra()}> Finalizar la compra </Button>
          //                                    </>
          //                                    )
          //                                    : 
          //                                    <>
          //                                         <Lottie options={{animationData:lottieSadBox,...defAutoAnim}} height={300} width={300} />
          //                                         <h2>El carrito se encuentra vacío</h2>
          //                                         <p>
          //                                              <Link to ="/">Ir a la pagina principal</Link> para sumar productos al carrito
          //                                         </p>
          //                                    </>
          //                               }
          //                          </>
          //                     }
          //                </div>
          //           </div>
          //      </div>
               {/* <h1>Mi carrito de compras</h1> */}
               {/* {  
                    alerta?
                    (<Alert variant="success">
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
                    </Alert>,
                    handleRemoveAll()
                    ) :
                    <>
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
                                                  </Form>      
                                             </Col>
                                        </Container>
                                        <Button variant="outline-primary" onClick={()=>ordenDeCompra()}> Finalizar la compra </Button>
                                   </>    
                              ) : <>
                                        <Lottie options={{animationData:lottieSadBox,...defAutoAnim}} height={300} width={300} />
                                        <h2>El carrito se encuentra vacío</h2>
                                        <p>
                                             <Link to ="/">Ir a la pagina principal</Link> para sumar productos al carrito
                                        </p>
                                   </>
                         }
                    </>
                    // </Container>
                    )
               }
               export default Cart;
          } }
     */}