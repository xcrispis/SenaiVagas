import 'react-native-gesture-handler';
import * as React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import login from './src/pages/login/index'
import home from './src/pages/home/index'
import minhasVagas from './src/pages/minhasVagas/index';
import minhasInscricoes from './src/pages/inscricoes/index';
import detalheInscricao from './src/pages/detralhesInscricao/index';
import Routes from './routes';

import sair from './src/pages/sair/index';
import { useState } from 'react';


const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();

const Stack = createStackNavigator();

export default function App() {
  const [logado, setLogado] = useState(sessionStorage.getItem('logado'));
  return (
    
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home"> 
        <Drawer.Screen name="Home" component={home} /> 
        {
          //usuario não logado
          logado == '0' || logado == null &&
          <Drawer.Screen name="Login" component={login} />
        }
        {
          //usuario logado
          logado == '1' && sessionStorage.getItem('permissao') == '1' &&
          <Drawer.Screen name="Minhas Vagas" component={minhasVagas} />
          
        }
        {
          //usuario logado Empresa
          logado == '1' && sessionStorage.getItem('permissao') == '2' &&
          <Drawer.Screen name="Minhas Inscrições" component={minhasInscricoes} />
          
          
        }
        {
          //usuario logado
          logado == '1' &&
          <Drawer.Screen name="Sair" component={sair} />

        }
        {/* <Drawer.Screen name="routes" component={Routes} />  ver como deixar invisivel*/}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}