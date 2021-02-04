// this function handles the signup process
export const signupHandler = () => {
  console.log('Sign up started');
};

// this function check if passwords match up
export const isPasswordsSame = (password1, password2) => {
  if (password1 === '' || password2 === '') {
    return true;
  }
  return password1 === password2;
};

// this function check the strength of the password
// TODO: complete function
export const isPasswordStrong = (password) => {
  if (password) {
    return true;
  }
  return false;
};
