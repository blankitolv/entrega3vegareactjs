import React,{useState} from 'react'
import ItemCount from '../ItemCount/ItemCount'
function ItemListContainer({greeting}) {
     const [item, setItem] = useState('');
     const onAdd=()=>{
          setItem(console.log('el item se agrego al carrito'));
     }
     return (
          <>
               <h1>{greeting}</h1>
               <ItemCount initial={1} stock={8} onAdd={onAdd} />
          </>
     )
}

export default ItemListContainer
