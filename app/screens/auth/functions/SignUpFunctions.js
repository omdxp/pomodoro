// this function check the validation of necessary inputs
export const isInputValidFunc = (fullName, userName, password) => {
  const regex = /((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+[0-9a-z]+$/i;
  if (
    fullName === '' ||
    userName === '' ||
    password === '' ||
    fullName.match(regex)
  ) {
    return false;
  }
  return true;
};

// this function check if all inputs are empty
export const areInputsEmptyFunc = (
  fullName,
  userName,
  password1,
  password2,
) => {
  return (
    fullName === '' || userName === '' || password1 === '' || password2 === ''
  );
};

// this function check if passwords match up
export const isPasswordsSame = (password1, password2) => {
  if (password1 === '' || password2 === '') {
    return true;
  }
  return password1 === password2;
};

// this function handles the signup process
export const signupHandler = (
  fullName,
  userName,
  password,
  dispatch,
  signupAction,
) => {
  if (!isInputValidFunc(fullName, userName, password)) {
    alert('not valid input');
    return;
  }
  console.log('Sign up started');
  const payload = {fullName, userName, password};
  console.log('payload:', payload);
  dispatch(signupAction(payload));
  console.log('dispatched!');
};
