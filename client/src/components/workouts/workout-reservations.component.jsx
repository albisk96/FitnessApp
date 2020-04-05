import React, { useState } from 'react';
import MemberList from '../users-table/workout-members-table.component';
import Modal from '../modal/modal.component';
import { Button } from 'react-bootstrap';

const WorkoutModal = ({ workout }) => {
    const [modalShow, setModalShow] = useState(false);
    console.log(workout.reservations)
    return(
        <div>
            <center>
                <Button variant="link" onClick={() => setModalShow(true)}>View Members</Button>
            </center>
            <Modal 
                bodyStyle={{ padding: '0rem'}} containerStyle={{ padding: '0rem'}} 
                show={modalShow} 
                size="modal-90w" onHide={() => setModalShow(false)} 
                title="Workout Information" 
                component={<MemberList reservations={workout.reservations} />
        } />
        </div>
    );
}


export default WorkoutModal;