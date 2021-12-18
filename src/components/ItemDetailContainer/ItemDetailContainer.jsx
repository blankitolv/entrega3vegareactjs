import React,{useState,useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getFireStore } from '../../services/getFirestore'
import Lottie from "react-lottie";
import lottieBookLoading from "../../gif/18081-book-bounce.json"
import { Animated } from "react-animated-css";
import NoExists from '../NoExists/NoExists';

function ItemDetailContainer () {
     const { itemId } = useParams()
     const [prod, setProd] = useState({})
     const [isLoading, setIsLoading] = useState(true)
     const [bandera,setBandera]=useState(true)
     const [existProduct,setExistProducto]=useState(false)

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
                    console.log ('---+++response firebase+++----')
                    console.log (response)
                    setProd( { id:response.id,...response.data() } )
                    setExistProducto (response.exists);
               })
               .finally(()=> {
                    // se setea la animación en falso para generar animación
                    // y luego de 1 segundo se setea en true para que vuelva modificado.
                    setBandera(false)
                    setTimeout(() => {
                         setIsLoading(false)
                    }, 1500);
               });
          }
     },[itemId])
     return (
          <div className="itemDetail">
               {
                    isLoading?
                         < Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={bandera}>
                                   <div className="mt-5 p-0" min-vh-100="true">
                                        < Lottie options={{animationData:lottieBookLoading,...defLottieLoading}} height={300} width={300} speed={0.5} />
                                   </div>
                         </ Animated >
                    :
                         existProduct?
                              < ItemDetail prop_producto={prod} />
                         :
                              <NoExists></NoExists>
                    
               }
          </div>
     )
}
export default ItemDetailContainer