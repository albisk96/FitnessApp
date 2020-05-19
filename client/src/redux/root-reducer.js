import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import profileReducer from './profile/profile.reducer';
import workoutsReducer from './workouts/workouts.reducer';
import athleteReducer from './athlete/athlete.reducer';
import exercisesReducer from './exercises/exercises.reducer';
import alertReducer from './alert/alert.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}

const rootReducer =  combineReducers({
  profile: profileReducer,
  workout: workoutsReducer,
  athlete: athleteReducer,
  exercises: exercisesReducer,
  alert: alertReducer
});

export default persistReducer(persistConfig, rootReducer);