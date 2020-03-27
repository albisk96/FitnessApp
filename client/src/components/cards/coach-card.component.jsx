import React from 'react';
import LinkButton from '../links/link-button.component';
import { CardContainer, CardImage, CardBody, CardFooter } from './card.styles';

const CoachCard = ({ coach: { 
    user: { _id, name },
    city, bio }
  }) => {
  return (
    
        <CardContainer>
          <CardImage src={`https://picsum.photos/id/${Math.floor((Math.random() * 100) + 1)}/200/100`} alt="Card image cap" />
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