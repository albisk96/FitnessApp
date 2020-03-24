import ProfileActionTypes from './profile.types';
  
export const getProfileSuccess = profile => ({
    type: ProfileActionTypes.GET_PROFILE_SUCCESS,
    payload: profile
});

export const getProfilesSuccess = profiles => ({
  type: ProfileActionTypes.GET_PROFILES_SUCCESS,
  payload: profiles
});

export const UpdateProfileSuccess = profile => ({
  type: ProfileActionTypes.UPDATE_PROFILE_SUCCESS,
  payload: profile
});

export const ClearProfileSuccess = () => ({
  type: ProfileActionTypes.CLEAR_PROFILE_SUCCESS,
});

export const getProfileError = errorMessage => ({
  type: ProfileActionTypes.GET_PROFILE_ERROR,
  payload: errorMessage
});