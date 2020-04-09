import AthleteActionTypes from './athlete.types';
  
export const getAthleteSuccess = athlete => ({
    type: AthleteActionTypes.GET_ATHLETE_SUCCESS,
    payload: athlete
});

export const UpdateAthleteSuccess = athlete => ({
  type: AthleteActionTypes.UPDATE_ATHLETE_SUCCESS,
  payload: athlete
});

export const getAthleteError = errorMessage => ({
  type: AthleteActionTypes.GET_ATHLETE_ERROR,
  payload: errorMessage
});