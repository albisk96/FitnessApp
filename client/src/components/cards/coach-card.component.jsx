import React from 'react';
import LinkButton from '../links/link-button.component';
import Reserve from '../coaches/coach-reservation';
import { CardContainer, CardImage, CardBody, CardFooter } from './card.styles';

const CoachCard = ({ coach: { 
    user: { name, avatar },
    city, bio, _id, workSchedule }
  }) => {
  return (
    
        <CardContainer>
          <CardImage src={avatar} alt="Card image cap" style={{ height: '170px'}} />
          <CardBody>
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{city}</p>
          </CardBody>
          <CardFooter>
          <div style={{ display: 'flex', justifyContent: 'space-between'}}>
          <LinkButton to={`/coach/user/${_id}`}>View Profile</LinkButton>
          <Reserve id={_id} price={workSchedule.price} />
          </div>
          </CardFooter>
          </CardContainer>
)
}

export default CoachCard;