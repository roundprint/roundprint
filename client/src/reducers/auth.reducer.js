import isEmpty from '../validation/is-empty';

import { SET_CURRENT_USER, GET_AUTH } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        role: (!isEmpty(action.payload))?action.payload.auth.role:null,
        user: action.payload
      };
    case GET_AUTH:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    default:
      return state;
  }
}