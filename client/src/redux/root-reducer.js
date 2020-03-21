import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import workoutsReducer from './workouts/workouts.reducer';
import profileReducer from './profile/profile.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}

const rootReducer =  combineReducers({
  workouts: workoutsReducer,
  profile: profileReducer
});

export default persistReducer(persistConfig, rootReducer);