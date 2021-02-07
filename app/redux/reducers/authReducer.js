import {SIGNUP} from '../constants';

export const initialStateAuth = {
  users: [],
};

export const authReducer = (state = initialStateAuth, action) => {
  console.log('authReducer:', state, action.payload);
  var userExists = false;
  switch (action.type) {
    case SIGNUP:
      state.users.forEach((element) => {
        if (element.userName === action.payload.userName) {
          userExists = true;
        }
      });
      if (userExists) {
        alert('Please provide another username!');
        return state;
      } else {
        alert('User added!');
        return {
          ...state,
          users: [...state.users, action.payload],
        };
      }

    default:
      return state;
  }
};
