import React from 'react';
import WorkoutCard from '../cards/workout-card.component';
import { CardColumnsContainer } from './workouts.styles';
import Spinner from '../../components/spinner/spinner.component';

const WorkoutList = ({ workouts }) => {
  return (
    <div className='container'>
    { !workouts ?  <Spinner /> : workouts === [] ? <h3>No workouts yet</h3> :
      <div style={{ marginTop: '5%'}}>
        <CardColumnsContainer>
          {workouts.map((workout, index) => (
            <WorkoutCard key={index} workout={workout} />
          ))}
        </CardColumnsContainer>
        </div> 
      }
      </div>
    )
}


export default WorkoutList;