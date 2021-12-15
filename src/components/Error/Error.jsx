import React from 'react'
import Alert from 'react-bootstrap/Alert'
import { Link } from 'react-router-dom';
import Lottie from "react-lottie";
import errorData from "../../gif/lf30_editor_nbmjdpsp.json"

const Error = () => {
     const defAutoAnim = {
          loop:false,
          autoplay:true,
          rendererSettings: {
               preserveAspectRatio: "xMidYMid slice"
          }
     }
     return (
          <div>
               <Alert variant="warning" h-100="true">
                    <Lottie options={{animationData:errorData,...defAutoAnim}} duration={6000} height={100} width={100}/>
                    <Alert.Heading> ¡Buuuh! </Alert.Heading>
                    <p>
                    ERROR en la comprobación de los datos ingresados
                    </p>
                    <hr />
                    <p>Vuelva a intentarlo</p>
                    <Link to="/cart">
                         <button className="btn btn-warning">
                              Volver
                         </button>
                    </Link>
               </Alert>
          </div>
     )
}
export default Error
