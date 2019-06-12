import {
    GET_ZONES,
  } from '../actions/types';
  
  const initialState = {
    zones: null,
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_ZONES:
        return {
          ...state,
          zones: action.payload
        };
      default:
        return state;
    }
  }
  