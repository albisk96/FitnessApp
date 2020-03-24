import React from 'react';
import WorkoutCard from '../cards/workout-card.component';
import { CardColumnsContainer } from './workouts.styles';

const WorkoutList = ({ workouts }) => {
    console.log(workouts)
  return (
    <div className='container'>
    { workouts ? 
      <div style={{ marginTop: '5%'}}>
        <CardColumnsContainer>
          {workouts.map((workout, index) => (
            <WorkoutCard key={index} workout={workout} />
          ))}
        </CardColumnsContainer>
        </div> : "This profile do not have any workouts yet"
      }
      </div>
    )
}


export default WorkoutList;