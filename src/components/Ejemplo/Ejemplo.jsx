import React from 'react'

const Ejemplo = () => {

     const vocales ='aeiou'
     const sinVocales = (event) => {
          if (vocales.includes(event.key)){
               event.preventDefault();
          }
     }
     return (
          <div>
               <input type="text" onKeyDown={sinVocales}/>
          </div>
     )
}

export default Ejemplo
