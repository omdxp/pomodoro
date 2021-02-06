// this function handles the login process
export const loginHandler = () => {
  console.log('Login started');
};

// this function check if all inputs are empty
export const areInputsEmptyFunc = (userName, password) => {
  return userName === '' || password === '';
};
