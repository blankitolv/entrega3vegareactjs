import React, { useState,useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getFireStore } from '../../services/getFirestore'
import Lottie from "react-lottie";
import lottieBookLoading from "../../gif/18081-book-bounce.json"
//libreria de animación para animar tanto la entrada del loading como la entrada de los articulso
import {Animated} from "react-animated-css";
function ItemListContainer() {
     const { catId } = useParams()
     const [productos, setproductos] = useState([])
     const [isLoading, setIsLoading] = useState(true)
     const [bandera,setBandera]=useState(true)

     const defLottieLoading = {
          loop:true,
          autoplay:true,
          rendererSettings: {
               preserveAspectRatio: "xMidYMid slice"
          }
     }

     useEffect(() => {
          setIsLoading(true);
          if (catId) {
               //dbQuery ahora tiene el callback de getFireStore() que explicité en getFireStore.js
               const dbQuery = getFireStore()
               dbQuery
               .collection('items')
               .where('cat','==',catId)
               .get()
               .then (data => setproductos( data.docs.map(unProducto => ( { id:unProducto.id,...unProducto.data() } )  )))
               .catch (err => console.log ('ERROR: '+err))
               .finally(()=> {
                    setBandera(false)
                    setTimeout(() => {
                         setIsLoading(false)
                    }, 1500);
               });
          } else {
               const dbQuery = getFireStore()
               dbQuery
               .collection('items')
               .get()
               // .data() extrae los datos que están dentro del response (linea:44)
               .then (data => setproductos( data.docs.map(unProducto => ( { id:unProducto.id,...unProducto.data() } )  )))
               .catch (err => console.log ('ERROR: '+err))
               .finally(()=> {
                    setBandera(false)
                    setTimeout(() => {
                         setIsLoading(false)
                    }, 1500);
               });
          }
     },[catId])

     return (
          <>
               {
                    isLoading?
                    (
                         <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={bandera}>
                              <div className="mt-5 p-0" min-vh-100="true">
                                   <Lottie options={{animationData:lottieBookLoading,...defLottieLoading}} height={300} width={300} speed={0.5} />
                              </div>
                         </Animated>
                    )
                    :
                         <div className="tarjetas mt-5" >
                              <ItemList productosCompletos={productos}/>
                         </div>
               }
          </>
     )
}
export default ItemListContainer 
