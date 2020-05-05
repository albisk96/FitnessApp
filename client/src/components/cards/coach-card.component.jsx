import React from 'react';
import LinkButton from '../links/link-button.component';
import { CardContainer, CardImage, CardBody, CardFooter } from './card.styles';

const CoachCard = ({ coach: { 
    user: { _id, name, avatar },
    city, bio }
  }) => {
  return (
    
        <CardContainer>
          <CardImage src={avatar} alt="Card image cap" style={{ height: '170px'}} />
          <CardBody>
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{city}</p>
          </CardBody>
          <CardFooter>
          <LinkButton to={`/coach/user/${_id}`}>View Profile</LinkButton>
          </CardFooter>
          </CardContainer>
)
}

export default CoachCard;