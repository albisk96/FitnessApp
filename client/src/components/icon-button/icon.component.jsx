import React, { useState } from 'react';
import Modal from '../modal/modal.component';

const Icon = ({ modalTitle, iconName, componentInModal }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
    }

    return (
    <div>
        <i style={{fontSize: '30px'}} onClick={handleShow} className={iconName}></i>
        <Modal style={{ width: '50vw'}} show={show} title={modalTitle} handleClose={handleClose} component={componentInModal} />
    </div>
    );
}

export default Icon;