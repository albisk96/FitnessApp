import WorkoutsActionTypes from './workouts.types';

const INITIAL_STATE = {
    workouts: [],
    workout: null,
    loading: true,
    errorMessage: undefined,
}

const workoutsReducer = ( state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch(type){
        case WorkoutsActionTypes.GET_WORKOUTS_SUCCESS:
            return {
                ...state,
                workouts: payload,
                loading: false,
            }
        case WorkoutsActionTypes.GET_WORKOUT_SUCCESS:
            return {
                ...state,
                workout: payload,
                loading: false,
            }
        case WorkoutsActionTypes.POST_WORKOUTS_SUCCESS:
            return {
                ...state,
                workouts: [payload, ...state.workouts],
                loading: false,
            }
        case WorkoutsActionTypes.DELETE_WORKOUT_SUCESS:
            return {
                ...state,
                workouts: state.workouts.filter(workout => workout._id !== payload),
                loading: false
            };
        case WorkoutsActionTypes.WORKOUTS_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: payload,
            }
        default:
            return state
    }
};

export default workoutsReducer;