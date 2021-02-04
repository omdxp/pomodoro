import {LOGIN} from '../../constants';

const loginAction = (payload) => {
  return {
    type: LOGIN,
    payload: payload,
  };
};

export default loginAction;
