import React,{memo} from "react";
import Item from "../Item/Item"
const ItemList = memo (
     ({productosCompletos}) => {
          return (
               <>
                    {productosCompletos.map(producto  => <Item unProducto={producto} key={producto.id}/>)}
               </>
          )
     }
     ,(anterior,posterior) => anterior.productosCompletos.length === posterior.productosCompletos.length )
export default ItemList;
// anterior y posterior almacenan todas las props
// si se cumple la condición, no se renderiza

