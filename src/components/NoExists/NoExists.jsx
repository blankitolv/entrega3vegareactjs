import React,{ useState }from 'react'
import { Modal, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'


const NoExists = () => {
     const [show, setShow] = useState(true);
     const handleClose = () => setShow(false);

     return (
          <Modal show={show} onHide={handleClose}>
               <Modal.Header closeButton>
                    <Modal.Title>Error</Modal.Title>
               </Modal.Header>
               <Modal.Body>Woooohh.. El producto no existe</Modal.Body>
               <Modal.Footer>
                    <Link to="/productos">
                         <Button variant="success" onClick={handleClose}>
                              Volver
                         </Button>
                    </Link>
               </Modal.Footer>
          </Modal>
     )
}
export default NoExists
