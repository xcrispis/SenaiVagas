import 'react-native-gesture-handler';
import * as React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import login from '../../pages/login/index'
import home from '../../pages/home/index'
import minhasVagas from '../../pages/minhasVagas/index';
import minhasInscricoes from '../../pages/inscricoes/index';
import detalheInscricao from '../../pages/detralhesInscricao/index';
import sair from '../../pages/sair/index';
import { useState } from 'react';

const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();

const Stack = createStackNavigator();

export default function DrawerPage() {
    const [logado, setLogado] = useState(sessionStorage.getItem('logado'));
    const [permissao, setPermissao] = useState(sessionStorage.getItem('permissao'));
    return (
            <Drawer.Navigator initialRouteName="Home">

                <Drawer.Screen name="Home" component={home} />
                {
                    //usuario não logado
                    logado == '0' || logado == null &&
                    <Drawer.Screen name="Login" component={login} />
                }
                {
                    //usuario logado
                    logado == '1' && permissao == '1' &&
                    <Drawer.Screen name="Minhas Vagas" component={minhasVagas} />

                }
                {
                    //usuario logado Empresa
                    logado == '1' && permissao == '2' &&
                    <Drawer.Screen name="Minhas Inscrições" component={minhasInscricoes} />


                }
                {
                    //usuario logado
                    logado == '1' &&
                    <Drawer.Screen name="Sair" component={sair} />

                }
            </Drawer.Navigator>
    )
}

