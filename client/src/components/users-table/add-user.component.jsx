import React, { useState } from 'react';
import RegisterForm from '../login-register/register.component';
import Modal from '../modal/modal.component';

const AddUser = ({ buttonName, className, modalTitle }) => {
    const [show, setShow] = useState(false);
    const [id, setId] = useState('');
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
        setId('new')
    }

    return(
        <div>
            <center>
                <button className={className} onClick={handleShow}>{buttonName}</button>
            </center>
            <Modal show={show} title={modalTitle} handleClose={handleClose} component={<RegisterForm id={id} />} />
        </div>
    );
}
export default AddUser;