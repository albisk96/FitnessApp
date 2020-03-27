import React from 'react';
import Modal from 'react-bootstrap/Modal'
import { Container } from 'react-bootstrap'

const showModal = ({ show, onHide, component, title, size }) => (
    <Modal dialogClassName={size} show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            {component}
          </Container>  
        </Modal.Body>
      </Modal>
);
  
export default showModal;