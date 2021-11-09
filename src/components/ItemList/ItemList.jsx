import React from "react";
import {useState,useEffect} from "react";
import Item from "../Item/Item"
import data from "../data/data"

function ItemList (){
     const [item, setItem]= useState();
     const dataItems = data;
     console.log (dataItems)
     useEffect(()=> {
          const getItems = new Promise ((res,rej)=> {
               setTimeout(()=> {
                    res(dataItems.map (item => {
                         console.log(item.imgSource);
                         return(
                              //llamo al Componente Item y le envío nombre e imagen
                              <div key={item.id}>
                                   <Item nombre={item.titulo} image={item.imgSource}/>
                              </div>

                              
                         )
                    }))
               },2000)
          })
          getItems.then (item => {setItem(item)})
     },[])
     return (
          <>{item}</>
     )
}
export default ItemList;