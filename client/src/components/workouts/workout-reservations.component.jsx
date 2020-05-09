import React, { useState, useEffect } from 'react';
import MemberList from '../users-table/workout-members-table.component';
import Modal from '../modal/modal.component';
import { Button } from 'react-bootstrap';
import axios from 'axios';

const WorkoutModal = () => {
    const [modalShow, setModalShow] = useState(false);
    const [athlete, setAthlete] = useState();
    console.log(athlete)

    useEffect(() => {
        async function getCurrentProfile() {
              const res = await axios.get('/api/coach/me')
              setAthlete(res.data.workSchedule.workouts)
          }
          getCurrentProfile()
       }, []) 

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
                component={<MemberList reservations={athlete} />
        } />
        </div>
    );
}


export default WorkoutModal;