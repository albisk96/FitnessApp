import WorkoutsActionTypes from './workouts.types';
import axios from 'axios';
import { alertActions } from '../alert/alert.actions'

export function fetchWorkoutData() {
  return (dispatch) => {
    return axios.get(`/api/workouts`)
      .then(response => {
        const workouts = response.data
        dispatch(fetchWorkoutsSuccess(workouts))
      })
      .catch(error => {
        dispatch(alertActions.error('Cannot get profiles data'))
      })
  };
};

export function createWorkout(formData) {
  return (dispatch) => {
    return axios.post('/api/workouts', formData)
      .then(response => {
        const newWorkout = response.data
        dispatch(postWorkoutsSuccess(newWorkout))
        dispatch(alertActions.success('Workout created!'))
      })
      .catch(error => {
        dispatch(alertActions.error('Cannot get profiles data'))
      })
  };
};

// Delete workout
export const deleteWorkout = id => async dispatch => {
  try {
    await axios.delete(`/api/workouts/${id}`);
    dispatch(DeleteWorkoutSuccess(id));
    dispatch(alertActions.success('Workout deleted!'))
    window.location.reload();
  } catch (error) {
    dispatch(alertActions.error('Cannot get profiles data'))
  }
};

export const getWorkoutById = id => async dispatch => {
  try {
    const res = await axios.get(`/api/workouts/${id}`);
    await dispatch(dispatch(fetchWorkoutSuccess(res.data)));
  } catch (error) {
    dispatch(alertActions.error('Cannot get profiles data'))
  }
};

const fetchWorkoutsSuccess = workoutsMap => ({
    type: WorkoutsActionTypes.GET_WORKOUTS_SUCCESS,
    payload: workoutsMap
});

const fetchWorkoutSuccess = workout => ({
  type: WorkoutsActionTypes.GET_WORKOUT_SUCCESS,
  payload: workout
});
  
const WorkoutsFailure = errorMessage => ({
    type: WorkoutsActionTypes.WORKOUTS_FAILURE,
    payload: errorMessage
});

const DeleteWorkoutSuccess = id => ({
  type: WorkoutsActionTypes.DELETE_WORKOUT_SUCCESS,
  payload: id
});

const postWorkoutsSuccess = workout => ({
  type: WorkoutsActionTypes.POST_WORKOUTS_SUCCESS,
  payload: workout
});