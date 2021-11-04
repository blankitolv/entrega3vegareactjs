import React,{useState} from "react";
const ItemCount = ({initial,stock,onAdd}) => {
     const [count, setCount] = useState(initial)
     // si el contador es más pequeño que la cantidad de existencia del producto, suma 1
     // sino, sale una leyenda diciendo "no hay mas ..."
     const contSuma = () => {
          count < stock ? setCount(count + 1) : alert(`No hay más que ${stock} en existencia`) ;
     }
     // si el contador es mayor a 0, el contador se decrementa en 1
     // sino sale una leyenda diciendo 'no puede ...'
     const contResta = () => {
          count > 0 ? setCount(count - 1) : alert(`No puede bajar más la cuenta`);
     }
     //si al hacer click, el contador es mayor a 0, realiza la función onAdd (que se encuentra en itemListContainer);
     //sino no hace nada
     const clickAdd = () => {
          if (count>0) {
               onAdd()
          }
     }
     return (
          <div>
               <p>Existencia del articulo {stock}</p>
               <button className="btn btn-success" onClick={contSuma}>+</button>
               <label> {count} </label>
               <button className="btn btn-success" onClick={contResta}>-</button>
               <button className="btn btn-success" onClick={clickAdd}>Agregar al carrito</button>
          </div>
     );
}
 
export default ItemCount;