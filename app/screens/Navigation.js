import React from 'react';
// import drawer navigation
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './home/HomeUI';
import Test from './test/TestUI';

// create drawer menu
const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Test" component={Test} />
    </Drawer.Navigator>
  );
}
