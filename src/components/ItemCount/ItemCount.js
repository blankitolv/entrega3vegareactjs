import React,{ useState,useEffect } from "react";
import { Col, Row } from "react-bootstrap";

const ItemCount = ({ inicial=1, stock, onAdd }) => {
     const [count, setCount] = useState(inicial)

     useEffect(() => {
          setCount(inicial)
     }, [inicial])

     const handleOption = (simbolo) => {
          simbolo===true ?
               count + 1 <= stock ?
                    setCount(count + 1) :
                    alert ('sin más stock')
          :
               count - 1 >= 1 ?
                    setCount(count-1) : 
                    setCount(1)
     }

     return (
          <>
               <div className="container-fluid" >
                    <Row>
                         <Col className="col-xs-3 col-md-4 w-100">
                              <button className="btn btn-success w-100" onClick={() => handleOption(true)}> + </button>
                         </Col>
                         <Col className="col-xs-3 col-md-4 w-100">
                              <label> {count} </label>
                         </Col>
                         <Col className="col-xs-3 col-md-4 w-100">
                              <button className="btn btn-success w-100" onClick={() => handleOption(false)}> - </button>
                         </Col>
                    </Row>
               </div >
               <Row className="mt-5 mb-4">
                    <Col md={12}>
                         <button className="btn btn-outline-primary" onClick={() => onAdd(count) }> COMPRAR </button>
                    </Col>
               </Row>
          </>
          // <div>
          //      {/* <p>Existencia del articulo {stock}</p> */}
          //      <button className="btn btn-success" onClick={() => handleOption(true)}> + </button>

          //      <label> {count} </label>

          //      <button className="btn btn-success" onClick={() => handleOption(false)}> - </button>
          //      {/* //al hacer click, envía en onAdd -> count */}
          //      <button className="btn btn-success" onClick={() => onAdd(count) }> COMPRAR </button>
          // </div>
     );
}
 
export default ItemCount;