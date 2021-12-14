import React,{useState,useEffect} from 'react'
// import { Container } from 'react-bootstrap';
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getFireStore } from '../../services/getFirestore'
import Lottie from "react-lottie";
import lottieBookLoading from "../../gif/18081-book-bounce.json"
function ItemDetailContainer () {
     const { itemId } = useParams()
     const [prod, setProd] = useState({})

     const [isLoading, setIsLoading] = useState(true)

     const defLottieLoading = {
          loop:true,
          autoplay:true,
          rendererSettings: {
               preserveAspectRatio: "xMidYMid slice"
          }
     }

     useEffect(() => {
          setIsLoading(true)
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
               .finally(()=> setIsLoading(false));
          }
     },[itemId])
     return (
          <div className="itemDetail">
               {
                    isLoading?
                    (
                    <h3>Cargando...</h3>,
                    <Lottie options={{animationData:lottieBookLoading,...defLottieLoading}} height={300} width={300} speed={0.5} />
                    )
                    :
                    <ItemDetail prop_producto={prod}/>
               }
          </div>
     )
}
export default ItemDetailContainer