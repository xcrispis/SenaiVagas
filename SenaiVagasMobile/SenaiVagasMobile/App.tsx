import * as React from 'react';
import { Text } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActions, NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

import login from './src/pages/login/index'
import home from './src/pages/home/index'
import minhasVagas from './src/pages/minhasVagas/index';
import minhasInscricoes from './src/pages/inscricoes/index';
import detalheInscricao from './src/pages/detralhesInscricao/index';
import header from './src/components/header/index';

import sair from './src/pages/sair/index';


const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        
        <Drawer.Screen name="Home" component={home} /> 
        {
          //usuario não logado
          sessionStorage.getItem('logado') == '0' || sessionStorage.getItem('logado') == null &&
          <Drawer.Screen name="Login" component={login} />
        }
        {
          //usuario logado
          sessionStorage.getItem('logado') == '1' && sessionStorage.getItem('permissao') == '1' &&
          <Drawer.Screen name="Minhas Vagas" component={minhasVagas} />
          
        }
        {
          //usuario logado Empresa
          sessionStorage.getItem('logado') == '1' && sessionStorage.getItem('permissao') == '2' &&
          <Drawer.Screen name="Minhas Inscrições" component={minhasInscricoes} />
          
          
        }
          <Drawer.Screen name="Details" component={detalheInscricao} />
        {
          //usuario logado
          sessionStorage.getItem('logado') == '1' &&
          <Drawer.Screen name="Sair" component={sair} />

        }
      </Drawer.Navigator>
    </NavigationContainer>
  );
}