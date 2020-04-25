import axios from 'axios';
import { getExercisesSuccess, getExercisesError } from './exercises.actions'

export function getExercisesList() {
    return (dispatch) => {
      return axios.get('/api/exercise')
        .then(response => {
          dispatch(getExercisesSuccess(response.data))
        })
        .catch(error => {
        dispatch(getExercisesError(error.message))
        })
    };
  };