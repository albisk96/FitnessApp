import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import axios from 'axios';
import { Button } from 'react-bootstrap'
import { useParams, Route } from 'react-router-dom';


function Confirmation() {
    const [show, setShow] = useState(true);
    const { id } = useParams();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(id)


    useEffect(() => {
        async function getUsers(){
        const res = await axios.get(`/api/confirmation/${id}`)
        console.log(res.data)
    } 
    getUsers()
    },[])

    const handeScheduleFormSubmit = e => {
      e.preventDefault();
      axios.post(`/api/confirmation`, {
          id: id
          })
          .then(res => console.log(res))
          .catch(err => {
            console.log(err.response.data.message);
          });
      }


  
    return (
      <div>
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Email Confirmation</Modal.Title>
          </Modal.Header>
          <Modal.Body>Click confirm button to confirm your email and try to login!</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handeScheduleFormSubmit}>
              Confirm
            </Button>
          </Modal.Footer>
        </Modal>
    </div>
    );
  }
  
  export default Confirmation;