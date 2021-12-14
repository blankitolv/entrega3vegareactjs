import React from 'react'
import Alert from 'react-bootstrap/Alert'

const Error = () => {
     return (
          <div>
               <Alert variant="warning" h-100="true">
                    <Alert.Heading> ERROR </Alert.Heading>
                    <p>
                         ¡Buuh! error en la comprobación del email
                    </p>
                    <hr />
                    <p>Vuelva a intentarlo</p>
               </Alert>
          </div>
     )
}
export default Error
