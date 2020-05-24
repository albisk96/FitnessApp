import React from 'react';
import { connect } from 'react-redux';
import WorkoutModal from '../workouts/workout-modal.component';
import MembersListModal from '../workouts/workout-reservations.component';
import StripeCheckoutButton from '../stripe-button/stripe-button.component';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../contexts';
import { deleteWorkout } from '../../redux/workouts/workouts.action';
import { CardContainer, CardBody, CardFooter, CardHeader } from './card.styles';

const WorkoutCard = ({ deleteWorkout, workout }) => {
  const { session } = useAuth();
  //const { reservations } = useSelector(state => state.athlete.athlete);
  //const reservation = reservations.map(x => x.workout)
  const mySession = ( session.id === workout.user._id ) 
  const closed = (new Date(workout.when) - new Date < 0)
  //const reserved = reservations.workout !== workout._id
  const myWorkout = mySession ? workout.athlete : null
  const myCard = !mySession ? 
  <StripeCheckoutButton workoutId={workout._id} coachId={workout.user._id} price={workout.price} /> 
  : closed ? 
    <Button onClick={() => deleteWorkout(workout._id)} variant="outline-danger">Delete</Button> : <MembersListModal workout={workout} size="modal-70w" />

  return(
        <CardContainer>
        <CardHeader style={{ backgroundColor: 'white' }}>
          {workout.title} 
        </CardHeader>
          <CardBody style={{ textAlign: 'center', display: 'flex', justifyContent: 'space-between'}}>
            <div>
              <i style={{ marginTop: '5%', fontSize: '2rem'}} className="fas fa-dumbbell"></i>
            </div>
            <div>
              <p className="card-text">{`Entries left: ${workout.entries}`}</p>
              <p className="card-text">{workout.address}</p>
              <h3>{workout.price} <i style={{ fontSize: '1rem'}} className="fas fa-euro-sign"></i></h3>
              
            </div>
            <div>
              <i style={{ marginTop: '5%', fontSize: '2rem'}} className="fas fa-dumbbell"></i>
            </div>
          </CardBody>
          <CardFooter style={{ backgroundColor: 'white' }}>
            {workout.entries > 0 ? 
              <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                <WorkoutModal workout={workout} size='modal-70w'/>
                {  myCard }
              </div> :
              <button className="btn btn-outline-danger float-left" disabled>
                  Sold Out
              </button>
            }
          </CardFooter>
        </CardContainer>
  )
}

export default connect(null, {deleteWorkout})(WorkoutCard);