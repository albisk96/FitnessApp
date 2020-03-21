import React, { Fragment } from 'react';
import {CardColumnsContainer, CardContainer, CardImage, CardBody, CardFooter } from './card.styles';

const Card = ({ workouts }) => {

return(
    <CardColumnsContainer>
      {workouts.map((workout, index) => (
        <CardContainer key={index} >
          <CardImage src={`https://picsum.photos/id/${Math.floor((Math.random() * 100) + 1)}/200/100`} alt="Card image cap" />
          <CardBody>
            <h5 className="card-title">{workout.text}</h5>
            <p className="card-text">{workout.description.substring(0, 150) + '...'}</p>
          </CardBody>
          <CardFooter>
            {workout.entries > 0 ? 
              <Fragment>
                <button className="btn btn-link">Read more</button>
              {//<StripeCheckoutButton id={workout._id} price='14.99' />
              }
              </Fragment> :
              <button className="btn btn-outline-danger float-left" disabled>
                  Sold Out
              </button>
            }
            <div className="float-right">
                <span >
                    <i style={{fontSize: '20px', color: '#6495ED' }} className="fas fa-thumbs-up"></i> {workout.likes.length}
                </span>
            </div>
          </CardFooter>
        </CardContainer>
      ))} 
  </CardColumnsContainer>
)
}

export default Card;