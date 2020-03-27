import React from 'react';
import { connect } from 'react-redux';
import WorkoutModal from '../workouts/workout-modal.component';
import StripeCheckoutButton from '../stripe-button/stripe-button.component';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../contexts';
import { deleteWorkout } from '../../redux/workouts/workouts.action';
import { CardContainer, CardImage, CardBody, CardFooter, CardHeader } from './card.styles';

const WorkoutCard = ({ deleteWorkout, workout }) => {
  const { session } = useAuth();

  const mySession = ( session.id === workout.user ) 

  const myCard = !mySession ? <StripeCheckoutButton id={workout._id} price={workout.price} /> : <Button onClick={() => deleteWorkout(workout._id)} variant="outline-danger">Delete</Button>

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
                <WorkoutModal workout={workout}/>
                { myCard }
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