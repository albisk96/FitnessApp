import React, { Fragment } from 'react';
import WorkoutModal from '../workouts/workout-modal.component';
import { CardContainer, CardImage, CardBody, CardFooter, CardHeader } from './card.styles';

const WorkoutCard = ({ workout }) => {
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
              <div style={{ display: 'flex'}}>
                <WorkoutModal workout={workout}/>
              {//<StripeCheckoutButton id={workout._id} price='14.99' />
              }
              </div> :
              <button className="btn btn-outline-danger float-left" disabled>
                  Sold Out
              </button>
            }
          </CardFooter>
        </CardContainer>
  )
}

export default WorkoutCard;