import React, { useState } from 'react';
import EditWorkout from './workout-edit.component';
import Modal from '../../components/modal/modal.component';

const EditWorkouModal = ({ id }) =>{
    const [modalShow, setModalShow] = useState(false);

    return(
        <div>
        <div style={{ justifyContent: 'space-between', marginLeft: '10px'}}> 
            <span onClick={() => setModalShow(true)} style={{fontSize: '20px', color: 'black' }}>
                <i className="far fa-edit"></i>
            </span>
        </div>
        <Modal show={modalShow} size="modal-50w" onHide={() => setModalShow(false)} title='Edit User' component={<EditWorkout id={id} />} />
        </div>
    )
}

export default EditWorkouModal;