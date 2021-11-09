import React from "react";
// import {Card, Button} from "react-bootstrap"
// -------- ESTOY EN TEST -> NO EN MASTER 
function Item({unaPersona, laKey}) {
     console.log ('HASTA ACA LLEGO22')
     return (
          //  { id: 5, nombre: 'Ghost', apellido: 'Vega-Troiano' }
          <div key={laKey}>
               <h6>Nombre: {unaPersona.nombre}</h6>
               <p>Apellido: {unaPersona.apellido}</p>
               <p>id: {unaPersona.id}</p>
          </div>
     )
}
export default Item;
// -------- ESTOY EN TEST -> NO EN MASTER 