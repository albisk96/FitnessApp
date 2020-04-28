import React from 'react';
import { connect } from 'react-redux';
import WorkoutModal from '../workouts/workout-modal.component';
import MembersListModal from '../workouts/workout-reservations.component';
import StripeCheckoutButton from '../stripe-button/stripe-button.component';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../contexts';
import { useSelector } from 'react-redux';
import { deleteWorkout } from '../../redux/workouts/workouts.action';
import { CardContainer, CardImage, CardBody, CardFooter, CardHeader } from './card.styles';

const WorkoutCard = ({ deleteWorkout, workout }) => {
  const { session } = useAuth();
  const { reservations } = useSelector(state => state.athlete.athlete);
  const reservation = reservations.map(x => x.workout)
  const mySession = ( session.id === workout.user ) 
  const closed = (new Date(workout.when) - new Date < 0)
  const reserved = reservation !== workout._id
  console.log(reserved)
  console.log(`${reservation} === ${workout._id}`)

  const myCard = !mySession
  ? <StripeCheckoutButton id={workout._id} price={workout.price} /> 
  : closed ? <Button onClick={() => deleteWorkout(workout._id)} variant="outline-danger">Delete</Button> : <MembersListModal workout={workout} size="modal-70w" />

  return(
        <CardContainer>
        <CardHeader>Featured</CardHeader>
          <CardImage src={`https://picsum.photos/id/${Math.floor((Math.random() * 100) + 1)}/200/100`} alt="Card image cap" />
          <CardBody>
            <h5 className="card-title">{workout.text}</h5>
            <p className="card-text">{workout.address}</p>
          </CardBody>
          <CardFooter>
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