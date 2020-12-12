import 'react-native-gesture-handler';
import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import detalheInscricao from './src/pages/detralhesInscricao/index'
const Stack = createStackNavigator();

export default function Routes()
{
    return(
          <Stack.Navigator>
            <Stack.Screen name="DetalhesInscricao" component={detalheInscricao} />
          </Stack.Navigator>
    )
}

