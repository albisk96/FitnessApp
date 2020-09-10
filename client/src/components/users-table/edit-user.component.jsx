import React, { useState } from 'react';
import RegisterForm from '../../components/login-register/register.component';
import Modal from '../../components/modal/modal.component';

const EditUser = ({ user_id }) =>{
    const [modalShow, setModalShow] = useState(false);

    return(
        <div>
        <div style={{ justifyContent: 'space-between', marginLeft: '10px'}}> 
            <span onClick={() => setModalShow(true)} style={{fontSize: '20px', color: 'black' }}>
                <i className="far fa-edit"></i>
            </span>
        </div>
        <Modal show={modalShow} size="modal-50w" onHide={() => setModalShow(false)} title='Edit User' component={<RegisterForm id={user_id} />} />
        </div>
    )
}

export default EditUser;