import {SIGNUP} from '../constants';

export const initialStateAuth = {
  users: [],
};

export const authReducer = (state = initialStateAuth, action) => {
  console.log('authReducer:', state, action.payload);
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        users: action.payload,
      };

    default:
      return state;
  }
};
