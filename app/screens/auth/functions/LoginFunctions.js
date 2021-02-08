// this function check if all inputs are empty
export const areInputsEmptyFunc = (userName, password) => {
  return userName === '' || password === '';
};

// this function handles the login process
export const loginHandler = (userName, password, users, navigation) => {
  console.log('Login started');
  console.log('loginHandler users:', users);
  var userExists = false;
  users.forEach((element) => {
    if (userName === element.userName && password === element.password) {
      userExists = true;
    }
  });
  userExists ? navigation.navigate('Main') : alert('Username does not exist');
};
