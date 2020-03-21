import React from 'react';
import { Redirect } from 'react-router-dom';
import './landing.styles.css';
import { useAuth } from '../../contexts';

const Landing = ( ) => {
  const { session } = useAuth();

  if(session){
      return <Redirect to='/dashboard' />
  }

  return (
    <section className='landing' />
  );
};


export default Landing;