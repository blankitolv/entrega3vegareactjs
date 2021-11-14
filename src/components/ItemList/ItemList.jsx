import React from "react";
// import {useState,useEffect} from "react";
import Item from "../Item/Item"
// import data from "../data/data"
function ItemList ({productosCompletos}){
     return (
          <>
               {productosCompletos.map(producto  => <Item unProducto={producto} key={producto.id}/>)}
          </>
     )
}
export default ItemList;
