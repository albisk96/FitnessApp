import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal'

export const ModalContainer = styled(Modal)`
    color: white;
    height: 100%;
`;

export const ModalContent = styled.div`
    background-color: #2e2f30;
`;

export const ModalHeader = styled(Modal.Header)`
    border-bottom: none;
    color: white;
`;

export const ModalBody = styled(Modal.Body)`
    border-bottom: 1px solid #2e2f30;
`;