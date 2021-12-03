import React, { useState,useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { getFireStore } from '../../services/getFirestore'
function ItemListContainer() {
     const { catId } = useParams()
     const [productos, setproductos] = useState([])
     // const [prod, setProd] = useState({}) itemDetail
     const [isLoading, setIsLoading] = useState(true)
     useEffect(() => {
          setIsLoading(true);
          // !! si tengo un parametro en catId ejecuta el primer caso, sino ejecuta else
          if (catId) {
               //dbQuery ahora tiene el callback de getFireStore() que explicité en getFireStore.js
               const dbQuery = getFireStore()
               dbQuery
               .collection('items')
               .where('cat','==',catId)
               .get()
               .then (data => setproductos( data.docs.map(unProducto => ( { id:unProducto.id,...unProducto.data() } )  )))
               .catch (err => console.log (err))
               .finally(()=> setIsLoading(false));
          } else {
               const dbQuery = getFireStore()
               dbQuery
               .collection('items')
               .get()
               // .data() extrae los datos que están dentro del response (linea:44)
               .then (data => setproductos( data.docs.map(unProducto => ( { id:unProducto.id,...unProducto.data() } )  )))
               .catch (err => console.log (err))
               .finally(()=> setIsLoading(false));
          }
     // vuelve a disparar el useEffect cuando se varía catId
     },[catId])
     return (
          <>
               {
                    isLoading?
                    <h3>Cargando...</h3>
                    :
                    <div className="tarjetas mt-5" >
                         <ItemList productosCompletos={productos}/>
                    </div>

               }
          </>
     )
}
export default ItemListContainer 
