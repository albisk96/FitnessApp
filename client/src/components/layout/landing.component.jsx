import React from 'react';
import { Redirect } from 'react-router-dom';
import { ContainerOne, ContainerTwo, ContainerThree, TextDialogForAthlete, TextDialogForCoach, Chip } from './layout.styles';
import { Card, CardDeck, Button } from 'react-bootstrap'
import { useAuth } from '../../contexts';

const Landing = ( ) => {
  const { session } = useAuth();

  if(session){
      return <Redirect to={`/${session.role}`} />
  }


  return (
    <div>
    <ContainerOne>
    <center>
      <h3 style={{ color: 'white', fontSize: '5rem'}}>Welcome!</h3>
    </center>
      <TextDialogForAthlete>
      <h1>GET YOUR PERSONAL WORKOUT PLAN!</h1>
      <div>
        Improve your skills and reach your goals!
        <br />
        <Chip>Lose Fat</Chip>
        <Chip>Gain Muscle</Chip>
        <Chip>Improve Strength</Chip>
      </div>
      </TextDialogForAthlete>
    </ContainerOne>
    <ContainerTwo>
    <TextDialogForCoach>
      <h1>EVERY KIND OF WORKOUT</h1>
      <div>
      From cardio and strength to yoga and boxing, we have the perfect workout for everyone!
        <br />
        <Chip>Crossfit</Chip>
        <Chip>Boxing</Chip>
        <Chip>Jogging</Chip>
        <Chip>Swimming</Chip>
        <Chip>Fitness</Chip>
        <Chip>Tennis</Chip>
      </div>
    </TextDialogForCoach>
    </ContainerTwo>
    <ContainerThree>
    <center>
    <h1 style={{ color: 'white'}}>GET A PERSONAL WORKOUT WITH A COACH</h1>
    <CardDeck style={{ width: '70%', marginTop: '5%'}}>
  <Card>
    <Card.Img variant="top" src="https://images.pexels.com/photos/1370750/pexels-photo-1370750.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
    <Card.Body>
      <Card.Title>John Doe</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
    <Card.Body>
      <Card.Title>Coach Carter</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://images.pexels.com/photos/1054251/pexels-photo-1054251.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
    <Card.Body>
      <Card.Title>Yoga Coach</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>
    </center>
    </ContainerThree>
    </div>
  );
};


export default Landing;