import React from 'react';
import LinkButton from '../links/link-button.component';
import Reserve from '../coaches/coach-reservation';
import { CardContainer, CardImage, CardBody, CardFooter } from './card.styles';
import Spinner from '../spinner/spinner.component';
import { useAuth } from '../../contexts';

const CoachCard = ({ coach: { 
    user, city, bio, _id, workSchedule }
  }) => {
    const { session } = useAuth();
    console.log(user._id)
    console.log(session.id)
  return (
      workSchedule === null ? <Spinner /> :
      <CardContainer>
      <CardImage src={user.avatar} alt="Card image cap" />
      <CardBody>
        <h5 className="card-title">{user.name}</h5>
        <p className="card-text">{city}</p>
      </CardBody>
      <CardFooter>
      <div style={{ display: 'flex', justifyContent: 'space-between'}}>
      <LinkButton to={`/coach/user/${_id}`}>View Profile</LinkButton>
      { workSchedule.workDays && user._id !== session.id ? <Reserve id={_id} price={workSchedule.price} /> : ''}
      
      </div>
      </CardFooter>
      </CardContainer>
  )
}

export default CoachCard;