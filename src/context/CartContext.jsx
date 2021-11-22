import React,{createContext,useState} from "react";

// el context debe ser exportable
export const CartContext = createContext ([]);


//CartContextProvider tiene como param los childrens
const CartContextProvider = ({children}) => {

     // useState -> este es mi carrito de compras
     const [carList, setCarList] = useState([])
     
     // function agregaCarrito -> llega el item y lo agrega al carrito
     const agregaCarrito=(item)=> {
          const indexItem = carList.findIndex(unProducto => unProducto.id === item.id)
          if (indexItem !== -1) {
               console.log ('-1')
               setCarList(item)
          } else {
               console.log ('Ya existe este producto en el carrito');
          }
     }

     return (
          // cart context real
          <CartContext.Provider value={{
               // atributos y funciones globales para usar en toda la app
               carList,
               setCarList,
               agregaCarrito,
          }}>
               {/* le agrega a los hijos, en este caso, app */}
               {children}
          </CartContext.Provider>
     )
}

export default CartContextProvider
