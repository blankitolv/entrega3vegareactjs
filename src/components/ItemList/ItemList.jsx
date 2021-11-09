import React from "react";
import {useState,useEffect} from "react";
import Item from "../Item/Item"
// import data from "../data/data"
// -------- ESTOY EN TEST -> NO EN MASTER 
function ItemList ({familiaCompleta}){
     console.log ('HASTA ACA LLEGO');
     const [todaLaFamilia, setTodaLaFamilia] = useState([])
     useEffect(() => {
          familiaCompleta.map( persona  => setTodaLaFamilia(<Item unaPersona={persona} laKey={persona.id}/>))
     }, [])
     return (
          <>
               {todaLaFamilia}
          </>
     )
}
export default ItemList;
// -------- ESTOY EN TEST -> NO EN MASTER 