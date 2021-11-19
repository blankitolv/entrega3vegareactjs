import React, { useState,useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { todosProductos } from '../../services/fetchBd'
import { useParams } from 'react-router-dom'

// --------------------------- ITEM LIST CONTAINER ----------
function ItemListContainer() {
     const { catId } = useParams()
     const [productos, setproductos] = useState([])
     useEffect(() => {
          if (catId){
               todosProductos
               .then (res => {
                    setproductos(res.filter(pro => pro.cat === catId))
               })
               .catch ( err => console.log (err))
               .finally(()=> console.log ('finalizo correctamente'))
          } else {
               todosProductos
               .then (res => setproductos (res))
               .catch ( err => console.log (err))
               .finally(()=> console.log ('finalizo correctamente'))
          }
     },[catId])  // vuelve a disparar el useEffect cuando se varía catId
     console.log('catId= ',catId);
     return (
          <>
               <div className="tarjetas">
                    <ItemList productosCompletos={productos}/>
               </div>
          </>
     )
}
export default ItemListContainer 
