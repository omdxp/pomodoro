import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';

// import screens
import Auth from './app/screens/auth/Navigation';
import Main from './app/screens/Navigation';

// import redux
import {Provider} from 'react-redux';
import {store} from './app/redux/store';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Provider store={store}>
      <NavigationContainer>
        {!isLoggedIn ? <Main /> : <Auth />}
      </NavigationContainer>
    </Provider>
  );
}
