import React from 'react';
import { Redirect } from 'react-router-dom';
import { ContainerOne, ContainerTwo, ContainerThree, TextDialogForAthlete, TextDialogForCoach, Chip } from '../../components/layout/layout.styles';
import { Card, CardDeck, Button } from 'react-bootstrap'
import { useAuth } from '../../contexts';
import Confirmation from '../../components/layout/confirmation.component';

const Landing = ( ) => {


  return (
    <div>
    <h3>HELLO </h3>
    <Confirmation />
    </div>
  );
};


export default Landing;