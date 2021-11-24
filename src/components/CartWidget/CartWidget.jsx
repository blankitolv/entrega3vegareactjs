import React,{useContext} from 'react';
import IconCart from './cart2.svg';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
     
     const { testigo } = useContext(CartContext);
     let addStyle='';
     let boxStyle='';
     if ( testigo === 0 ) {
          addStyle = {display:"none"}
          boxStyle = {backgroundColor:"#d0d3cf"}
     } else {
          addStyle = {display:"flex"}
          boxStyle = {backgroundColor:"#106b21"}
     }
     return (
          <div className="iconAndIndicator">
               <img className="cIconCart" style={boxStyle} src={IconCart} alt='Imagen de carrito'/>
               <div className="containerTestigo" style={addStyle}>
                    <p className="testigo">{ testigo }</p>
               </div>
          </div>
     )
}
export default CartWidget
