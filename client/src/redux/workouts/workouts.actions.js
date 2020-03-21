import WorkoutsActionTypes from './workouts.types';
import axios from 'axios';

export function fetchWorkoutData() {
  return (dispatch) => {
    dispatch(fetchWorkoutsStart());

    return axios.get('/api/workouts')
      .then(response => {
        const workouts = response.data
        dispatch(fetchWorkoutsSuccess(workouts))
      })
      .catch(error => {
      dispatch(fetchWorkoutsFailure(error.message))
      })
  };
};

export function createWorkout(formData) {
  return (dispatch) => {

    dispatch(postWorkoutsStart);
    console.log('Start posting')
    return axios.post('/api/workouts', formData)
      .then(response => {
        const newWorkout = response.data
        dispatch(postWorkoutsSuccess(newWorkout))
      })
      .catch(error => {
        dispatch(postWorkoutsFailure(error.message))
      })
  };
};

const fetchWorkoutsStart = () => ({
    type: WorkoutsActionTypes.GET_WORKOUTS_START,
});
  
const fetchWorkoutsSuccess = workoutsMap => ({
    type: WorkoutsActionTypes.GET_WORKOUTS_SUCCESS,
    payload: workoutsMap
});
  
const fetchWorkoutsFailure = errorMessage => ({
    type: WorkoutsActionTypes.GET_WORKOUTS_FAILURE,
    payload: errorMessage
});

const postWorkoutsStart = () => ({
  type: WorkoutsActionTypes.POST_WORKOUTS_START,
});

const postWorkoutsSuccess = workout => ({
  type: WorkoutsActionTypes.POST_WORKOUTS_SUCCESS,
  payload: workout
});

const postWorkoutsFailure = errorMessage => ({
  type: WorkoutsActionTypes.POST_WORKOUTS_FAILURE,
  payload: errorMessage
});
