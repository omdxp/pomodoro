// this function check if passwords match up
export const isPasswordsSame = (password1, password2) => {
  if (password1 === '' || password2 === '') {
    return true;
  }
  return password1 === password2;
};
