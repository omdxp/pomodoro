import React from 'react';
import Test from './app/screens/test/TestUI';
import Home from './app/screens/home/HomeUI';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

// create the drawer menu
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{headerShown: true}}
        drawerType={'slide'}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Test" component={Test} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
