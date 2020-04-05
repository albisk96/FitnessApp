import React, { useState } from 'react';
import AddWorkoutData from './workout-form.component';
import Modal from '../modal/modal.component';

const AddWorkout = ({ buttonName, className, modalTitle }) => {
    const [id] = useState('new');
    const [modalShow, setModalShow] = useState(false);

    return(
        <div>
            <center>
                <button className={className} onClick={() => setModalShow(true)}>{buttonName}</button>
            </center>
            <Modal show={modalShow} size="modal-50w" onHide={() => setModalShow(false)} title={modalTitle} component={<AddWorkoutData id={id} />} />
        </div>
    );
}
export default AddWorkout;