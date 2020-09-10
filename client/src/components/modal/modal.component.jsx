import React from 'react';
import Modal from 'react-bootstrap/Modal'
import { Container } from 'react-bootstrap'
import { ModalContainer, ModalContent, ModalHeader, ModalBody} from './modal.styles'

const showModal = ({ show, onHide, component, title, size, ...props }) => (
    <ModalContainer dialogClassName={size} show={show} onHide={onHide}>
      <ModalContent>
        <ModalHeader closeButton>
          <Modal.Title>{title}</Modal.Title>
        </ModalHeader>
        <ModalBody style={props.bodyStyle}>
          <Container style={props.containerStyle}>
            {component}
          </Container>  
        </ModalBody>
        </ModalContent>
      </ModalContainer>
);
  
export default showModal;