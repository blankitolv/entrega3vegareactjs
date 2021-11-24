import React, { useState,useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { todosProductos } from '../../services/fetchBd'
import { useParams } from 'react-router-dom'

// --------------------------- ITEM LIST CONTAINER ----------
function ItemListContainer() {
     const { catId } = useParams()
     const [productos, setproductos] = useState([])
     const [isLoading, setIsLoading] = useState(true)
     useEffect(() => {
          // mostrar por categoría
          if (catId){
               todosProductos
               .then (res => {
                    setproductos(res.filter(pro => pro.cat === catId))
                    setTimeout(() => {
                         setIsLoading(false)
                    },2000);
               })
               .catch ( err => console.log (err))
               .finally(()=> console.log ('finalizo correctamente'))
          } else {
               // mostrar todos
               todosProductos
               // .then (res => setproductos (res))
               .then (res => {
                    setproductos(res)
                    setTimeout(() => {
                         setIsLoading(false)
                    },2000);
               })
               .catch ( err => console.log (err))
               .finally(()=> console.log ('finalizo correctamente'))
          }
     },[catId])  // vuelve a disparar el useEffect cuando se varía catId
     return (
          <>
               {
                    isLoading?
                    <h3>Cargando...</h3>
                    :
                    <div className="tarjetas">
                         <ItemList productosCompletos={productos}/>
                    </div>
               }

          </>
     )
}
export default ItemListContainer 
