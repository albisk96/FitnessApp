import React, { useState } from 'react';
import WorkoutModalInformation from './workout-information';
import Modal from '../modal/modal.component';
import { Button } from 'react-bootstrap';

const WorkoutModal = ({ workout }) => {
    const [modalShow, setModalShow] = useState(false);

    return(
        <div>
            <center>
                <Button variant="link" onClick={() => setModalShow(true)}>Read More</Button>
            </center>
            <Modal 
                bodyStyle={{ padding: '0rem'}} containerStyle={{ padding: '0rem', height: '30vh'}} 
                show={modalShow} 
                size="modal-90w" onHide={() => setModalShow(false)} 
                title="Workout Information" 
                component={<WorkoutModalInformation workout={workout} />
        } />
        </div>
    );
}


export default WorkoutModal;