import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectWorkout } from '../../redux/workouts/workouts.selectors';
import Spinner from '../spinner/spinner.component';
import { useAuth } from '../../contexts';
import WorkoutCard from '../cards/workout-card.component';
import { fetchWorkoutData } from '../../redux/workouts/workouts.action';
import { CardColumnsContainer } from './workouts.styles';

const WorkoutList = ({ workout: {workouts} }) => {
  console.log(workouts)
  return (
    <div className='container'>
      <div style={{ marginTop: '5%'}}>
      { 
        <CardColumnsContainer>
          {workouts.map((workout, index) => (
            <WorkoutCard key={index} workout={workout} />
          ))}
          </CardColumnsContainer>
      }
      </div>
    </div>
    )
}

const mapStateToProps = state => ({
  workout: state.workout
});



export default connect(mapStateToProps)(WorkoutList);