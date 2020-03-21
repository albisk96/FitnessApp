import React, { Fragment } from 'react';
import StripeCheckoutButton from '../stripe-button/stripe-button.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectWorkout } from '../../redux/workouts/workouts.selectors';
import AddWorkout from './add-workout.component';
import { useAuth } from '../../contexts';
import Card from '../cards/card.component';

const WorkoutList = ({ workouts }) => {
const { session } = useAuth();

  return (
    <div className='container'>
      <div style={{ marginTop: '5%'}}>
      <AddWorkout className="btn btn-outline-danger my-2 my-sm-0" modalTitle="Create a workout" buttonName="Add New" />
      </div>
      <Card workouts={workouts} />
    </div>
    )
}

const mapStateToProps = createStructuredSelector({
    workouts: selectWorkout
  });


export default connect(mapStateToProps)(WorkoutList);