import React from 'react';
import LinkButton from '../links/link-button.component';
import Reserve from '../coaches/coach-reservation';
import { CardContainer, CardImage, CardBody, CardFooter } from './card.styles';
import Spinner from '../spinner/spinner.component';

const CoachCard = ({ coach: { 
    user: { name, avatar },
    city, bio, _id, workSchedule }
  }) => {
  return (
      workSchedule === null ? <Spinner /> :
      <CardContainer>
      <CardImage src={avatar} alt="Card image cap" />
      <CardBody>
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{city}</p>
      </CardBody>
      <CardFooter>
      <div style={{ display: 'flex', justifyContent: 'space-between'}}>
      <LinkButton to={`/coach/user/${_id}`}>View Profile</LinkButton>
      { workSchedule.workDays ? <Reserve id={_id} price={workSchedule.price} /> : ''}
      
      </div>
      </CardFooter>
      </CardContainer>
  )
}

export default CoachCard;