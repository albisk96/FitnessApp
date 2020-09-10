import ExercisesActionTypes from './exercises.types';

const INITIAL_STATE = {
	exercises: null,
	loading: true,
	errorMessage: undefined,
}

const exercisesReducer = ( state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch(type){
        case ExercisesActionTypes.GET_EXERCISES_SUCCESS:
            return {
                ...state,
                exercises: payload,
                loading: false
            }
        case ExercisesActionTypes.GET_EXERCISES_ERROR:
            return {
                ...state,
                errorMessage: payload,
                loading: false,
                exercises: null
            }
        default:
            return state
    }
};

export default exercisesReducer;