import React, { useState, useEffect } from 'react';
import MemberList from '../users-table/workout-members-table.component';
import Modal from '../modal/modal.component';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import Spinner from '../spinner/spinner.component';

const WorkoutModal = ({ workout }) => {
    const [modalShow, setModalShow] = useState(false);
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
                component={<MemberList workout={workout} />} 
            />
        </div>
    );
}


export default WorkoutModal;