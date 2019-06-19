import { combineReducers } from 'redux';
import auth from './auth.reducer';
import errors from './error.reducer';
import profile from './profile.reducer';
import zone from './zone.reducers';

export default combineReducers({
  auth,
  profile,
  zone,
  errors
});
