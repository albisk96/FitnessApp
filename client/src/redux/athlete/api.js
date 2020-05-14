import axios from 'axios';
import { getAthleteSuccess, UpdateAthleteSuccess, getAthleteError } from './athlete.actions'

export function getCurrentProfile() {
    return (dispatch) => {
      return axios.get('/api/athlete')
        .then(response => {
          dispatch(getAthleteSuccess(response.data))
        })
        .catch(error => {
        dispatch(getAthleteError(error.message))
        })
    };
  };
  
  // Create or update profile
  export const createProfile = (
    formData
  ) => async dispatch => {
    try {  
      const res = await axios.post('/api/athlete', formData);
      dispatch(getAthleteSuccess(res.data));
      window.location.reload();
    } catch (error) { 
      dispatch(getAthleteError(error.message));
    }
  };

  // Update Body Fat
export const bodyFat = (formData) => async dispatch => {
    try {
      const res = await axios.put('/api/athlete/bodyFat', formData);
      dispatch(UpdateAthleteSuccess(res.data));
    } catch (error) {
      dispatch(getAthleteError(error.message));
    }
  };

    // Update BMI
export const calcBMI = (formData) => async dispatch => {
    try {
      const res = await axios.put('/api/athlete/bmi', formData);
      dispatch(UpdateAthleteSuccess(res.data));
    } catch (error) {
      dispatch(getAthleteError(error.message));
    }
  };

    // Update BMI
  export const generatePlan = (formData) => async dispatch => {
      try {
        const res = await axios.put('/api/athlete/plan', formData);
        dispatch(UpdateAthleteSuccess(res.data));
      } catch (error) {
        dispatch(getAthleteError(error.message));
      }
    };