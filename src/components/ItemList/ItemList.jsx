import React from "react";
import Item from "../Item/Item"
function ItemList ({productosCompletos}){
     return (
          <>
               {productosCompletos.map(producto  => <Item unProducto={producto} key={producto.id}/>)}
          </>
     )
}
export default ItemList;
