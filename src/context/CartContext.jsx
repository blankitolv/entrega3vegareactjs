import React,{createContext,useState} from "react";
// el context debe ser exportable
export const CartContext = createContext ([]);


//CartContextProvider tiene como param los childrens
const CartContextProvider = ({children}) => {
     // useState -> este es mi carrito de compras
     const [carList, setCarList] = useState([])
     const [montoCompra, setMontoCompra] = useState(0);
     const sumarUno = (item,count) => {
          const newCarList=[];
          carList.forEach(element => {
               if (element.id !== item.id) {
                    newCarList.push(element)
               } else {
                    if (element.cantidad+count <= element.stock) {
                         element.cantidad+=count;
                         newCarList.push(element);
                         setCarList(newCarList);
                    } else {
                         element.cantidad=element.stock;
                         newCarList.push(element);
                         setCarList(newCarList);
                    }
               }
          })
     }
     // function agregaCarrito -> llega el item y lo agrega al carrito
     const agregaCarrito=(item,count)=> {
          /// si no está (-1) lo agrego
          const indexItem = carList.findIndex(unProducto => unProducto.id === item.id)
          if (indexItem === -1) {
               console.log ('agregué un producto')
               setCarList([...carList,item])
          } else {
               console.log ('sumé un producto')
               sumarUno(item,count)
          }
          console.log (carList);
     }
     const removeItem =(id)=>{
          setCarList (carList.filter(unItem => unItem.id !== id ));
     }
     const clearCarrito =()=>{
          setCarList([]);
     }
     const totalCompra=()=> {
          let acum=0;
          carList.forEach(element => {
               acum+=element.pcio*element.cantidad;
          });
          setMontoCompra(acum);
          console.log ('** montoCompra **')
          console.log (montoCompra)
     }
     return (
          // cart context real
          <CartContext.Provider value={{
               // atributos y funciones globales para usar en toda la app
               carList,
               setCarList,
               agregaCarrito,
               removeItem,
               clearCarrito,
               totalCompra,
               montoCompra

          }}>
               {/* le agrega a los hijos, en este caso, app */}
               {children}
          </CartContext.Provider>
     )
}

export default CartContextProvider
