import React from "react";
import { Link } from 'react-router-dom'

const ItemCount = ({onAdd,onRes,cantidad}) => {
     return (
          <div>
               {/* <p>Existencia del articulo {stock}</p> */}
               <button className="btn btn-success" onClick={onAdd}>+</button>
               <label> {cantidad} </label>
               <button className="btn btn-success" onClick={onRes} >-</button>
               <Link to = '/cart'>
                    <button className="btn btn-success" >Agregar al carrito</button>
               </Link>
          </div>
     );
}
 
export default ItemCount;