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

// this function check if passwords match up
export const isPasswordsSame = (password1, password2) => {
  if (password1 === '' || password2 === '') {
    return true;
  }
  return password1 === password2;
};
