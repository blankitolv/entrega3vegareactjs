import React,{useState,useEffect} from 'react'
import { Container } from 'react-bootstrap';
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getFireStore } from '../../services/getFirestore'
function ItemDetailContainer () {
     const { itemId } = useParams()
     const [prod, setProd] = useState({})

     useEffect(() => {
          if (itemId) {
               const dbQuery = getFireStore()
               dbQuery
               .collection('items')
               .doc(`${itemId}`)
               .get()
               .then ( response => {
                    console.log ('response firebase')
                    console.log (response)
                    // .data() extrae los datos que están dentro del response
                    setProd( { id:response.id,...response.data() } )
               })
          }
     },[itemId])
     return (
          <div className="itemDetail">
               {
                    <ItemDetail prop_producto={prod}/>
               }
          </div>
     )
}
export default ItemDetailContainer