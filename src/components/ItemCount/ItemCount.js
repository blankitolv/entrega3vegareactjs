import React,{ useState,useEffect } from "react";
// import { Link } from 'react-router-dom'

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
          <div>
               {/* <p>Existencia del articulo {stock}</p> */}
               <button className="btn btn-success" onClick={() => handleOption(true)}> + </button>

               <label> {count} </label>

               <button className="btn btn-success" onClick={() => handleOption(false)}> - </button>
               {/* //al hacer click, envía en onAdd -> count */}
               <button className="btn btn-success" onClick={() => onAdd(count) }> COMPRAR </button>
          </div>
     );
}
 
export default ItemCount;