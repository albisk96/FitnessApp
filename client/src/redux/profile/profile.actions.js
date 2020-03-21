import axios from 'axios';
import ProfileActionTypes from './profile.types';

  export function getCurrentProfile() {
    return (dispatch) => {
      dispatch(getProfileStart());
  
      return axios.get('/api/coach/me')
        .then(response => {
          dispatch(getProfileSuccess(response.data))
        })
        .catch(error => {
        dispatch(getProfileFailure(error.message))
        })
    };
  };
  

  export function createProfile(formData) {
    return (dispatch) => {
  
      console.log('Start posting')
      return axios.post('/api/coach', formData)
        .then(response => {
          dispatch({
            type: ProfileActionTypes.POST_PROFILE_SUCCESS,
            payload: response.data
          })
        })
        .catch(error => {
          dispatch({
            type: ProfileActionTypes.POST_PROFILE_FAILURE,
             payload: error.message
          })
      })
    };
  };

const getProfileStart = () => ({
    type: ProfileActionTypes.GET_PROFILE_START,
});
  
const getProfileSuccess = profile => ({
    type: ProfileActionTypes.GET_PROFILE_SUCCESS,
    payload: profile
});
  
const getProfileFailure = errorMessage => ({
    type: ProfileActionTypes.GET_PROFILE_FAILURE,
    payload: errorMessage
});