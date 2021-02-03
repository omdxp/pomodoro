import React from 'react';
// import stack navigation
import {createStackNavigator} from '@react-navigation/stack';
import Login from './LoginUI';
import SignUp from './SignUpUI';

// create stack
const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}
