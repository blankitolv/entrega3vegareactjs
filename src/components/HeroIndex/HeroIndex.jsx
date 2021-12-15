import React from 'react'
import { Link } from 'react-router-dom'
import miLogo from '../../assets/logointelectos.png'

const HeroIndex = () => {
     return (
          <>
               <div className="container-fluid wallpaper min-vh-100 pt-2">
                    <div className="text-center pt-3 my-4">
                         <img className="d-block mx-auto mb-4" src={miLogo} alt="" width="130" height="80"/>
                         <h1 className="display-5 fw-bold"> <span className="bienvenidos text-white"> Bienvenidos </span></h1>
                         <div className="col-lg-6 mx-auto">
                              <p className="lead mb-4 fw-bold">Editorial Intelectos es una empresa santafesina del rubro del papel impreso.- Cancioneros, revistas, libros son algunos de nuestros productos que actualmente están en el mercado nacional</p>
                              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                              <Link to="/productos">
                                   <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Ver Productos</button>
                              </Link>
                              <button type="button" className="btn btn-outline-success fw-bold btn-lg px-4">Contacto</button>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default HeroIndex
