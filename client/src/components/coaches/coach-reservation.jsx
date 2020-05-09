import React, { useState } from 'react';
import Schedule from '../profile/schedule/reserve-schedule.component';
import Modal from '../modal/modal.component';
import { Button } from 'react-bootstrap';

const CoachReservation = ({ id, price }) => {
    const [modalShow, setModalShow] = useState(false);
    return(
        <div>
            <center>
                <Button variant="link" onClick={() => setModalShow(true)}>Reserve</Button>
            </center>
            <Modal 
                bodyStyle={{ padding: '0rem'}} containerStyle={{ padding: '0rem'}} 
                show={modalShow} 
                size="modal-90w" onHide={() => setModalShow(false)} 
                title="Workout Information" 
                component={<Schedule id={id} price={price} />
        } />
        </div>
    );
}

export default CoachReservation;