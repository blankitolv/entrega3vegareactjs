import React,{useContext} from 'react';
import IconCart from './cart2.svg';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
     
     const { testigo } = useContext(CartContext);
     return (
          <button type="button" className="btn btn-warning position-relative mx-5">
               <img src={ IconCart } alt="cart"/>
               {
                    testigo!==0?
                         <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                              { testigo }
                              <span className="visually-hidden"></span>
                         </span>
                    :
                    <></>
               }
          </button>
     );
}
export default CartWidget
