import {SIGNUP} from '../../constants';

const signupAction = (payload) => {
  return {
    type: SIGNUP,
    payload: payload,
  };
};

export default signupAction;
