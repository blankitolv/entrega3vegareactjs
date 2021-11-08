import React from "react";
import { useState } from "react";
import Item from "../Item/Item"
import data from "../data/data"

function ItemList (){
     const [item, setItem]= useState();
     const dataItems = data;
     console.log ('Acá llega DATA ')
     console.log (dataItems)

     let getItems = new Promise ((res,rej)=> {
          setTimeout(()=> {
               res(dataItems.map (item => {
                    return(
                         //llamo al Componente Item y le envío nombre e imagen
                         <Item key={item.id} nombre={item.title} image={item.imgSource}/>
                    )
               }))
          },2000)
     })
     getItems.then (item => {setItem(item)})
     return (
          <>{item}</>
     )
}
export default ItemList;