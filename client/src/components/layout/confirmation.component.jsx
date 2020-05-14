import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import axios from 'axios';
import { Button } from 'react-bootstrap'

function Confirmation() {
    const [show, setShow] = useState(true);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    // useEffect(() => {
    //     async function getUsers(){
    //     const res = await axios.get(`/api/confirmation`)
    // } 
    // getUsers()
    // },[])
  
    return (
      <div>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Email Confirmation</Modal.Title>
          </Modal.Header>
          <Modal.Body>Click confirm button to confirm your email and try to login!</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Confirm
            </Button>
          </Modal.Footer>
        </Modal>
    </div>
    );
  }
  
  export default Confirmation;