import React,{useState,useEffect} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'

const productos = [
     {id:"1", imgSource:"https://i.ibb.co/d6T3r1c/c-CALAMARO.jpg", titulo: "Calamaro", pcio: 210, stock:"56", alt:"imagen cancionero"},
     {id:"2", imgSource:"https://i.ibb.co/D93Xzv1/c-DIVIDIDOS.jpg",titulo: "Divididos", pcio:200, stock:"56", alt:"imagen cancionero"},
     {id:"3", imgSource:"https://i.ibb.co/Kz1KNsZ/c-INTOXICADOS.jpg",titulo: "Intoxicados", pcio:200, stock:"56", alt:"imagen cancionero"},
     {id:"4", imgSource:"https://i.ibb.co/K2vQKFS/c-REDONDOS.jpg",titulo: "Los Redondos", pcio:210, stock:"56", alt:"imagen cancionero"},
     {id:"5", imgSource:"https://i.ibb.co/BZp9j9w/c-SPINETTA.jpg",titulo: "SPINETTA", pcio:200, stock:"23", alt:"imagen cancionero"},
     {id:"6", imgSource:"https://i.ibb.co/rvsYFW7/c-SOSA.jpg",titulo: "Mercedes Sosa", pcio:210, stock:"23", alt:"imagen cancionero"},
     {id:"7", imgSource:"https://i.ibb.co/qFCFb1v/c-SOLE.jpg",titulo: "La Sole", pcio:200, stock:"23", alt:"imagen cancionero"},
     {id:"8", imgSource:"https://i.ibb.co/d5thQ4F/c-SODA.jpg",titulo: "Soda Stereo", pcio:100, stock:"23", alt:"imagen cancionero"},
     {id:"9", imgSource:"https://i.ibb.co/rkPWzKq/c-ROLINGAS2.jpg",titulo: "Rolingas Y Chabones", pcio:210, stock:"13", alt:"imagen cancionero"},
     {id:"10", imgSource:"https://i.ibb.co/FVDt4sM/c-RODRIGUEZ.jpg",titulo: "Silvio Rodriguez", pcio:100, stock:"26", alt:"imagen cancionero"},
     {id:"11", imgSource:"https://i.ibb.co/RS8mgGT/c-GARCIA.jpg",titulo: "Charly García", pcio:200, stock:"26", alt:"imagen cancionero"},
];
 
const getFetch = new Promise ((res,rej) => {
     setTimeout(()=> {
          res(productos);
     },2000)
}) 

// --------------------------- ITEM LIST CONTAINER ----------
function ItemListContainer({greeting}) {
     const [productos, setproductos] = useState([])
     useEffect(() => {
          getFetch
          .then (res => setproductos (res))
          .catch ( err => console.log (err))
          .finally(()=> console.log ('finalizo correctamente'))
     },[])

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
