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

export const AddCommentSuccess = data => ({
  type: ProfileActionTypes.ADD_COMMENT,
  payload: data
});

export const RemoveCommentSuccess = id => ({
  type: ProfileActionTypes.REMOVE_COMMENT,
  payload: id
});

export const getProfileError = errorMessage => ({
  type: ProfileActionTypes.GET_PROFILE_ERROR,
  payload: errorMessage
});