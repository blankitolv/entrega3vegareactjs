import React,{createContext,useState,useEffect} from "react";

export const CartContext = createContext ([]);


//CartContextProvider tiene como param los childrens
const CartContextProvider = ({children}) => {

     
     const [carList, setCarList] = useState([]);
     const [montoCompra, setMontoCompra] = useState(0);
     const [testigo, setTestigo] = useState(0);

     //cuanto se modifica el estado de carList, dispara la modificación del testigo
     useEffect(() => {
          testigoCarrito()
          // eslint-disable-next-line
     }, [carList])

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
     const testigoCarrito = () => {
          let acum=0;
          carList.forEach(element => {
               acum+=element.cantidad; 
          });
          setTestigo(acum);
     }
     
     // function agregaCarrito -> llega el item y lo agrega al carrito
     const agregaCarrito=(item,count)=> {
          /// si no está "-1" lo agrego
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
          return montoCompra;
     }

     
     return (
          // cart context real
          <CartContext.Provider value={{
               // atributos y funciones globales para usar en toda la app
               carList,
               montoCompra,
               testigo,
               setCarList,
               agregaCarrito,
               removeItem,
               clearCarrito,
               totalCompra
          }}>
               {children}
          </CartContext.Provider>
     )
}

export default CartContextProvider
