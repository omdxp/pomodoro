import React, {useState} from 'react';
import Test from './app/screens/test/TestUI';
import Home from './app/screens/home/HomeUI';
import {NavigationContainer} from '@react-navigation/native';

// import screens
import Auth from './app/screens/auth/Navigation';
import Main from './app/screens/Navigation';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <NavigationContainer>
      {isLoggedIn ? <Main /> : <Auth />}
    </NavigationContainer>
  );
}
