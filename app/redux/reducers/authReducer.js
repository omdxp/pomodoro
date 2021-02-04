import {LOGIN, SIGNUP} from '../constants';

export const initialStateAuth = {
  users: [],
};

export const authReducer = (state = initialStateAuth, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        users: [...users, action.payload],
      };

    case SIGNUP:
      return {
        ...state,
        users: [...users, action.payload],
      };

    default:
      return state;
  }
};
