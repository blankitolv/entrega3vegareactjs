const productos = [
     {id:"1",  imgSource:"https://i.ibb.co/d6T3r1c/c-CALAMARO.jpg",   titulo: "Calamaro",                cat: "rockArg",          pcio:210, stock:"56", alt:"imagen cancionero", desc:"Andrés Calamaro Masel es un cantautor, músico, compositor y productor discográfico argentino. <br> Es considerado uno de los iconos del rock argentino por su actuación con Los Abuelos de la Nada y su prolífica carrera como solista, así como una figura influyente del rock español por su éxito con Los Rodríguez.​"},
     {id:"2",  imgSource:"https://i.ibb.co/D93Xzv1/c-DIVIDIDOS.jpg",  titulo: "Divididos",               cat: "rockArg",          pcio:200, stock:"56", alt:"imagen cancionero", desc:"Divididos es una banda argentina de rock, fundada en 1988 por Ricardo Mollo y Diego Arnedo, <br> exintegrantes de MAM junto a Omar Mollo​y de Sumo, cuando esta se disolvió por la muerte de su líder, Luca Prodan. En sus trabajos, han incursionado en estilos musicales locales como el folklore.​"},
     {id:"3",  
     imgSource:"https://i.ibb.co/Kz1KNsZ/c-INTOXICADOS.jpg",
     titulo: "Intoxicados",             
     cat: "rockArg",          
     pcio:200, 
     stock:"10", 
     alt:"imagen cancionero", 
     desc:"Intoxicados fue una banda de rock argentino formada en la ciudad de Buenos Aires. Surge a fines <br> del año 2000, tras la separación de la banda Viejas Locas. "},
     {id:"4",  imgSource:"https://i.ibb.co/K2vQKFS/c-REDONDOS.jpg",   titulo: "Los Redondos",            cat: "rockArg",          pcio:210, stock:"56", alt:"imagen cancionero", desc:"Patricio Rey y sus Redonditos de Ricota, también conocidos como Los Redondos, fue una banda de rock <br> argentina, formada en La Plata en 1976, e integrada, en su mayor parte, por el Indio Solari, Skay Beilinson, Semilla Bucciarelli, Walter Sidotti y Sergio Dawi."},
     {id:"5",
       imgSource:"https://i.ibb.co/BZp9j9w/c-SPINETTA.jpg",
        titulo: "SPINETTA",
                     cat: "rockArg",
               pcio:200,
      stock:"23",
      alt:"imagen cancionero", desc:"Seguir viviendo sin tu amor - Durazno Sangrando - Muchacha ojos de papel - El anillo del <br> capitán Beto - Resumen Porteño - Barro Tal Vez - A esos hombres tristes - Alma de Diamante - Maribel se durmió - Cheques - Los libros de la buena memoria - Plegaria para un niño dormido - Ella también - fermín - Todas las hojas son del viento - Para saber como es la soledad - Post Crucifixión - Que Ves el cielo - quedandote o yéndote - sexo - será que la canción llegó hasta el sol "},
     {id:"6",  imgSource:"https://i.ibb.co/rvsYFW7/c-SOSA.jpg",       
     titulo: "Mercedes Sosa",           
     cat: "folkloreArg",      
     pcio:210, 
     stock:"23", 
     alt:"imagen cancionero", 
     desc:"Alfonsina Y El Mar - Carito - Como La Cigarra - Como Pájaros En El Aire - Dale Alegría a Mi <br> Corazón - Gracias A La Vida - La Maza - La Última Curda - María, María - María Va - Pedro Canoero - Razón De Vivir - Si Se Calla El Cantor - Solo Le Pido A Dios - Todavía Cantamos - Todo Cambia - Un Son Para Portinari - Un Vestido Y Un Amor - Volver A Los Diecisiete - Yo Vengo A Ofrecer Mi Corazón "},
     {id:"7",  imgSource:"https://i.ibb.co/qFCFb1v/c-SOLE.jpg",       titulo: "La Sole",                 cat: "folkloreArg",      pcio:200, stock:"23", alt:"imagen cancionero", desc:"A Don Ata - Achalay Tafí del Valle - Alma, Corazón y Vida - Pucón De Fiesta en Fiesta - Déjame <br> que me Vaya -  Enero - Entre a mi Pago sin Golpear - Kilómetro 11 - La del Norte Cordobés - La Omha - Libre - Luna Cautiva - Ódiame - Propiedad Privada - Punta Cayastá - Que Nadie Sepa mi Sufrir - Sapo Cancionero - Tren del Cielo "},
     {id:"8",  imgSource:"https://i.ibb.co/d5thQ4F/c-SODA.jpg",       titulo: "Soda Stereo",             cat: "rockArg",          pcio:100, stock:"23", alt:"imagen cancionero", desc:"Ella usí mi cabeza como un revólver - canción animal - cuando pase el temblor - lo que angra <br> - Dietético - de musica ligera - Nada personal - porque no puedo ser del jet set - ecos - el rito - en la ciudad de la furia - final caja negra - persiana americana - imágenes retro - juego de seducción - sobredosis de tv - tele-ka - te hacen falta vitaminas - te para tres - un millón de años luz "},
     {id:"9",  imgSource:"https://i.ibb.co/rkPWzKq/c-ROLINGAS2.jpg",  titulo: "Rolingas Y Chabones",     cat: "rockArg",          pcio:210, stock:"13", alt:"imagen cancionero", desc:"La Mancha de Rolando - Jovene Pordioseros - Pier - El Bordo - Attaque 77 - Catupecu Machi - Estelares <br> - Guasones - no te va gustar - cadena perpetua - Los tipitos - intoxicados - Callejos y más."},
     {id:"10",
     imgSource:"https://i.ibb.co/FVDt4sM/c-RODRIGUEZ.jpg",
     titulo: "Silvio Rodriguez",
     cat: "trovador",
     pcio:100,
     stock:"26",
     alt:"imagen cancionero",
      desc:"Silvio Rodríguez Domínguez es un cantautor, guitarrista y poeta cubano, exponente característico de la <br> música de su país surgida con la Revolución cubana, conocida como la Nueva Trova, que comparte con otros reconocidos cantautores tales como Pablo Milanés, Noel Nicola y Vicente Feliú.​"},
     {id:"11", imgSource:"https://i.ibb.co/RS8mgGT/c-GARCIA.jpg",     titulo: "Charly García",           cat: "rockArg",          pcio:200, stock:"26", alt:"imagen cancionero", desc:'<sin descripcion>'},
];
let prodAleatorio = Math.floor(Math.random() * (productos.length - 1)) + 1;

export const unProducto_fetch = new Promise ((res,rej)=> {
     setTimeout(() => {
          res(productos[prodAleatorio]);
     },2000)
})

export const todosProductos = new Promise ((res, rej)=> {
     setTimeout(() => {
          res(productos)
     },2000)
})
// export const categoria = new Promise ((res, rej)=> {
//      setTimeout(() => {
//           res(productos)
//      },2000)
// })
