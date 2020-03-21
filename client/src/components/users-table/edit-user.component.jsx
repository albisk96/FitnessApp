import React, { useState } from 'react';
import RegisterForm from '../../components/login-register/register.component';
import Modal from '../../components/modal/modal.component';

const EditUser = ({ user_id }) =>{
    const [show, setShow] = useState(false);
    const [id, setId] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = (userId) => {
        setId(userId)
        setShow(true);
    }

    return(
        <div>
        <div style={{ justifyContent: 'space-between', marginLeft: '10px'}}> 
            <span onClick={() => handleShow(user_id)} style={{fontSize: '20px', color: 'black' }}>
                <i class="far fa-edit"></i>
            </span>
        </div>
        <Modal show={show} handleClose={handleClose} title="Edit User" component={<RegisterForm id={id} />} />
        </div>
    )
}

export default EditUser;