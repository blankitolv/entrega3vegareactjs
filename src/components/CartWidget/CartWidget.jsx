import React,{useContext} from 'react';
import IconCart from './cart2.svg';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
     
     const { testigo } = useContext(CartContext);
     let addStyle={};
     let boxStyle={};
     if ( testigo === 0 ) {
          console.log ('el valor de testigo es '+testigo)
          addStyle = {display:"none"}
     } else {
          console.log ('el valor de testigo es '+testigo)
          addStyle = {display:"flex", transition:"1s all"}
          boxStyle = {backgroundColor:"#c4bbbb"}
     }

     return (
          <div className="iconAndIndicator">
               <img className="cIconCart" style={ { boxStyle } } src={ IconCart } alt='Imagen de carrito'/>
               <div className="containerTestigo" style= { addStyle } >
                    <p className="testigo">{ testigo }</p>
               </div>
          </div>
     );
}
export default CartWidget
