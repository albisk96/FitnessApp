import React, { useState } from 'react';
import AddWorkoutData from './workout-form.component';
import Modal from '../modal/modal.component';

const AddWorkout = ({ buttonName, className, modalTitle }) => {

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
            <Modal show={show} title={modalTitle} handleClose={handleClose} component={<AddWorkoutData id={id} />} />
        </div>
    );
}
export default AddWorkout;