import React,{useState,useEffect} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'

// MI LISTA DE PRODUCTOS
const productos = [
     {id:"1", imgSource:"https://i.ibb.co/d6T3r1c/c-CALAMARO.jpg", titulo: "Calamaro", pcio: 200, stock:"56", alt:"imagen cancionero"},
     {id:"2", imgSource:"https://i.ibb.co/D93Xzv1/c-DIVIDIDOS.jpg",titulo: "Divididos", pcio:200, stock:"56", alt:"imagen cancionero"},
     {id:"3", imgSource:"https://i.ibb.co/Kz1KNsZ/c-INTOXICADOS.jpg",titulo: "Intoxicados", pcio:200, stock:"56", alt:"imagen cancionero"},
     {id:"4", imgSource:"https://i.ibb.co/K2vQKFS/c-REDONDOS.jpg",titulo: "Los Redondos", pcio:200, stock:"56", alt:"imagen cancionero"}
];

// PROMESA CON 2 Segundos en Delay
const getFetch = new Promise((res, rej)=> {
     let cond=true
     if (cond) {
          setTimeout(()=>{
               res=(productos);
          },2000)
     } else {
          setTimeout(()=>{
               rej=('Error!')
          },3000)
     }
})

// --------------------------- ITEM LIST CONTAINER ----------
function ItemListContainer({greeting}) {
     const [product, setProduct] = useState([])
     useEffect(()=> {
          getFetch  .then(res => { setProduct(res) })
                    .catch(err => console.log(err))
                    .finally(()=>console.log('Finalizo todo correctamente'))
     },[])

     const [item, setItem] = useState('');
     const onAdd=(count)=>{
          setItem(console.log('el item se agrego al carrito'));
     }
     return (
          <>
               <ItemCount initial={1} stock={8} onAdd={onAdd} />
               <ItemList propRes={product}/>
          </>
     )
}
export default ItemListContainer
