import React,{useState,useEffect} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'
const familia = [
     { id: 1, nombre: 'Cladia', apellido: 'Vega' },
     { id: 2, nombre: 'Claudio', apellido: 'Vega' },
     { id: 3, nombre: 'Clotilde', apellido: 'Vega' },
     { id: 4, nombre: 'Cliford', apellido: 'Valentina' },
     { id: 5, nombre: 'Clorinda', apellido: 'Vega' }
   ];

// -------- ESTOY EN TEST -> NO EN MASTER 
const getFetch = new Promise ((res,rej) => {
     setTimeout(()=> {
          res(familia);
     },2000)
})
// -------- ESTOY EN TEST -> NO EN MASTER 

// --------------------------- ITEM LIST CONTAINER ----------
function ItemListContainer({greeting}) {
     const [familia, setFamilia] = useState([])
     useEffect(() => {
          getFetch
          .then (res => setFamilia(res))
          .catch (err => console.log (err))
          .finally(()=> console.log ('finalizo correctamente'))
     },[])
     const [item, setItem] = useState('');
     const onAdd=(count)=>{
          setItem(console.log('el item se agrego al carrito '+item));
     }

     return (
          <>
               <ItemCount initial={1} stock={8} onAdd={onAdd} />
               <ItemList familiaCompleta={familia}/>
          </>
     )
}
export default ItemListContainer
// -------- ESTOY EN TEST -> NO EN MASTER 
