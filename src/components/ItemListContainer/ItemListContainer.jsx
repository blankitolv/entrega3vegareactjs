import React,{useState,useEffect} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'



// PROMESA CON 2 Segundos en Delay
// const getFetch = new Promise((res, rej)=> {
//      let cond=true
//      if (cond) {
//           setTimeout(()=>{
//                res(productos);
//           },2000)
//      } else {
//           setTimeout(()=>{
//                rej('Error!')
//           },3000)
//      }
// })

// --------------------------- ITEM LIST CONTAINER ----------
function ItemListContainer({greeting}) {
     // const [product, setProduct] = useState([])
     // useEffect(()=> {
     //      getFetch  .then(res => { setProduct(res) })
     //                .catch(err => console.log(err))
     //                .finally(()=>console.log('Finalizo todo correctamente'))
     // },[])
     const [item, setItem] = useState('');
     const onAdd=(count)=>{
          setItem(console.log('el item se agrego al carrito '+item));
     }
     return (
          <>
               <ItemCount initial={1} stock={8} onAdd={onAdd} />
               <div className="tarjetas">
                    <ItemList/>
               </div>
          </>
     )
}
export default ItemListContainer
