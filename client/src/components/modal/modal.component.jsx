import React from 'react';
import Modal from 'react-bootstrap/Modal'

const showModal = ({ show, handleClose, component, title }) => (
    <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {component}
        </Modal.Body>
      </Modal>
);
  
export default showModal;