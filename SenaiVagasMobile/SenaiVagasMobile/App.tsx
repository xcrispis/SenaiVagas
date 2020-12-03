import * as React from 'react';
import { Button, View } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import login from './src/pages/login/index'
import home from './src/pages/home/index'
import minhasVagasCandidato from './src/screens/minhasVagasCandidato';


const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={home} />
        <Drawer.Screen name="Login" component={login} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}