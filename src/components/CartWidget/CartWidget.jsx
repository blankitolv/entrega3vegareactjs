import React,{useContext, useEffect, useState} from 'react';
import IconCart from './cart2.svg';
import { CartContext } from '../../context/CartContext';
// librería Animated = animar la entrada del testigo
import { Animated } from "react-animated-css";


const CartWidget = () => {
     const [bandera,setBandera]=useState(true)
     const { testigo } = useContext(CartContext);
     const [testigoAuxiliar,setTestigoAuxiliar]=useState(testigo)
     useEffect(() => {
          setBandera(false);
          setTimeout(() => {
               setBandera(true);
               setTestigoAuxiliar(testigo);
          }, 1000);
     },[testigo])
     return (
          <button type="button" className="btn btn-warning position-relative mx-5">
               <img src={ IconCart } alt="cart"/>
               {
                    testigo!==0?
                         <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                              <Animated className="w-100 h-100 position-relative" animationIn="bounceIn" animationOut="bounceOut" isVisible={bandera} animationInDuration={1000} >
                                   { testigoAuxiliar }
                                   <span className="visually-hidden"></span>
                              </Animated>
                         </span>
                    :
                    <></>
               }
          </button>
     );
}
export default CartWidget
