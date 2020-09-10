import React, { useState } from 'react';
import Modal from '../modal/modal.component';

const Icon = ({ modalTitle, iconName, componentInModal }) => {
    const [modalShow, setModalShow] = useState(false);

    return (
    <div>
        <i style={{fontSize: '30px'}} onClick={() => setModalShow(true)} className={iconName}></i>
        <Modal show={modalShow} size="modal-50w" onHide={() => setModalShow(false)} title={modalTitle} component={componentInModal} />
    </div>
    );
}

export default Icon;