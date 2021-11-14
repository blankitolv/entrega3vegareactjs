import React, { useState,useEffect } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'
import { todosProductos } from '../../services/fetchBd'
import { useParams } from 'react-router-dom'

// --------------------------- ITEM LIST CONTAINER ----------
function ItemListContainer() {
     const { catId } = useParams()
     const [productos, setproductos] = useState([])
     useEffect(() => {

          if (catId){
               todosProductos
               .then (res => {
                    setproductos(res.filter(pro => pro.cat === catId))
               })
               .catch ( err => console.log (err))
               .finally(()=> console.log ('finalizo correctamente'))
          } else {
               todosProductos
               .then (res => setproductos (res))
               .catch ( err => console.log (err))
               .finally(()=> console.log ('finalizo correctamente'))
          }
     },[catId])  // vuelve a disparar el useEffect cuando se varía catId
     console.log('catId= ',catId);
     const [item, setItem] = useState('');
     const onAdd=(count)=>{
          setItem(console.log('el item se agrego al carrito '+item));
     }
     return (
          <>
               <ItemCount initial={1} stock={8} onAdd={onAdd} />
               <div className="tarjetas">
                    <ItemList productosCompletos={productos}/>
               </div>
          </>
     )
}
export default ItemListContainer 
