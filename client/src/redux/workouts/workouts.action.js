import WorkoutsActionTypes from './workouts.types';
import axios from 'axios';

export function fetchWorkoutData() {
  return (dispatch) => {
    return axios.get(`/api/workouts`)
      .then(response => {
        const workouts = response.data
        dispatch(fetchWorkoutsSuccess(workouts))
      })
      .catch(error => {
      dispatch(WorkoutsFailure(error.message))
      })
  };
};

export function createWorkout(formData) {
  return (dispatch) => {
    return axios.post('/api/workouts', formData)
      .then(response => {
        const newWorkout = response.data
        dispatch(postWorkoutsSuccess(newWorkout))
      })
      .catch(error => {
        dispatch(WorkoutsFailure(error.message))
      })
  };
};

// Delete workout
export const deleteWorkout = id => async dispatch => {
  try {
    await axios.delete(`/api/workouts/${id}`);
    dispatch(DeleteWorkoutSuccess(id));
    window.location.reload();
  } catch (error) {
    dispatch(WorkoutsFailure(error.message))
  }
};

export const getWorkoutById = id => async dispatch => {
  try {
    const res = await axios.get(`/api/workouts/${id}`);
    dispatch(dispatch(fetchWorkoutSuccess(res.data)));
  } catch (error) {
    dispatch(dispatch(WorkoutsFailure(error.message)));
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
