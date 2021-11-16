import React,{useState} from 'react'

const Boton1 = ({intercambio}) => {
     return <button className="btn btn-primary" onClick={intercambio}>boton1</button>
}
const Boton2 = ({intercambio}) => {
     return <button className="btn btn-warning" onClick={intercambio}>boton2</button>
}


const Ejemplo2 = () => {
     const [btns,setBtns] = useState('boton1')
     
     const intercambio = () => {
          if (btns==='boton1') {
               setBtns('boton2')
          } else {
               setBtns('boton1')
          }
          console.log (btns)
     }

     return (
          <div>
               {
                    btns === 'boton1' ? 
                         <Boton1 intercambio={intercambio}></Boton1>
                         :
                         <Boton2 intercambio={intercambio}></Boton2>
               }
          </div>
     )
}

export default Ejemplo2
/*  
asi lo entendí yo.
1- establecemos con el useState el estado inicial del botón que se va a mostrar (linea 12)
2- va al return pregunta por *btns* (que está en 'boton1' (linea 26)) y llama al contenedor 'boton1'(linea3) y le envía como prop
la función INTERCAMBIO() (linea27)
3- el contenedor, arma el botón y pone como evento (onClick linea4) a la función que le mandé como parametro (como prop)
4- cuando hace click y se ejecuta la función intercambio() y cambia el 'boton1' por 'boton2' y vuelve al return (y empieza de nuevo)
*/