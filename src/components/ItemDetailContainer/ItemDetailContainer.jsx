import React,{useState,useEffect} from 'react'
import { todosProductos } from '../../services/fetchBd'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'


function ItemDetailContainer () {
     const { itemId } = useParams()
     const [prod, setProd] = useState({})

     useEffect(() => {
          if ( itemId ) {
               todosProductos
                    .then (res => {
                         setProd(res.find(x => x.id === itemId))
                    })
                    .catch(error => console.log(error))
                    .finally (()=> console.log ('fetch finalizado'))

          }
     },[itemId])

          console.log ('itemID '+itemId)
          console.log (typeof(prod));
     return (
          <div className="itemDetail">
               <ItemDetail prop_producto={prod} />
          </div>
     )
}
export default ItemDetailContainer