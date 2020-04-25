import ExercisesActionTypes from './exercises.types';
  
export const getExercisesSuccess = exercises => ({
    type: ExercisesActionTypes.GET_EXERCISES_SUCCESS,
    payload: exercises
});

export const getExercisesError = errorMessage => ({
  type: ExercisesActionTypes.GET_EXERCISES_ERROR,
  payload: errorMessage
});