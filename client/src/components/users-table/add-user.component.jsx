import React, { useState } from 'react';
import RegisterForm from '../login-register/register.component';
import Modal from '../modal/modal.component';

const AddUser = ({ buttonName, className, modalTitle }) => {
    const [id] = useState('new');
    const [modalShow, setModalShow] = useState(false);

    return(
        <div>
            <center>
                <button className={className} onClick={() => setModalShow(true)}>{buttonName}</button>
            </center>
            <Modal show={modalShow} size="modal-50w" onHide={() => setModalShow(false)} title={modalTitle} component={<RegisterForm id={id} />} />
        </div>
    );
}
export default AddUser;