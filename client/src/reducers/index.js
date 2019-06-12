import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import profileReducer from './profile.reducer';
import zoneReducer from './zone.reducers';

export default combineReducers({
  auth: authReducer,
  profile: profileReducer,
  zone: zoneReducer,
  errors: errorReducer
});
