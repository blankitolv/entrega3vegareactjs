import React,{useState,useEffect} from 'react'
//devuelve un item aleatoriode la bd
import { unProducto_fetch } from '../../services/fetchBd'
import ItemDetail from '../ItemDetail/ItemDetail'
function ItemDetailContainer () {
const [prod, setProd] = useState({})
     useEffect(() => {
          unProducto_fetch
               .then (res => setProd(res))
               .catch(error => console.log(error))
               .finally (()=> console.log ('fetch finalizado'))
     },[])
          console.log (prod)
     return (
          <div className="itemDetail">
               <ItemDetail prop_producto={prod} key="1"/>
          </div>
     )
}
export default ItemDetailContainer