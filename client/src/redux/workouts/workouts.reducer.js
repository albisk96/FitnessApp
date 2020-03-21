import WorkoutsActionTypes from './workouts.types';

const INITIAL_STATE = {
    workout: [],
    isFetching: false,
    errorMessage: undefined,
}

const workoutsReducer = ( state = INITIAL_STATE, action) => {
    switch(action.type){
        case WorkoutsActionTypes.GET_WORKOUTS_START:
            return {
                ...state,
                isFetching: true,
            }
        case WorkoutsActionTypes.GET_WORKOUTS_SUCCESS:
            return {
                ...state,
                workout: action.payload,
                isFetching: false,
            }
        case WorkoutsActionTypes.GET_WORKOUTS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload,
            }
        case WorkoutsActionTypes.POST_WORKOUTS_START:
            return {
                ...state,
                isFetching: true,
            }
        case WorkoutsActionTypes.POST_WORKOUTS_SUCCESS:
            return {
                ...state,
                workout: action.payload,
                isFetching: false,
            }
        case WorkoutsActionTypes.POST_WORKOUTS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload,
            }
        default:
            return state
    }
};

export default workoutsReducer;