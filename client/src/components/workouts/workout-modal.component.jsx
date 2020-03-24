import React, { useState } from 'react';
import WorkoutModalInformation from './workout-information';
import Modal from '../modal/modal.component';
import { Button } from 'react-bootstrap';

const WorkoutModal = ({ workout }) => {
  const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
    }

    return(
        <div>
            <center>
                <Button variant="link" onClick={handleShow}>Read More</Button>
            </center>
            <Modal show={show} title="Workout Information" handleClose={handleClose} component={<WorkoutModalInformation workout={workout} />} />
        </div>
    );
}


export default WorkoutModal;