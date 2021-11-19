import React,{createContext,useState} from "react";
export const CartContext = createContext ([]);
const CartContextProvider = ({children}) => {
     const [carList, setCarList] = useState([])
     const agregaCarrito=(item)=> {
          setCarList(item)
     }
     return (
          <CartContext.Provider value={{
               carList,
               agregaCarrito,
          }}>
               {children}
          </CartContext.Provider>
     )
}

export default CartContextProvider
