import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import profileReducer from './profile/profile.reducer';
import workoutsReducer from './workouts/workouts.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}

const rootReducer =  combineReducers({
  profile: profileReducer,
  workout: workoutsReducer
});

export default persistReducer(persistConfig, rootReducer);