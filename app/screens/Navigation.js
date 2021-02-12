import React from 'react';
// import drawer navigation
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './home/ui/HomeUI';

// create drawer menu
const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}
