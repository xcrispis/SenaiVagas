import React from 'react';
import { View, Text, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

export function DrawerPersonalizado(props) {
    return(
        <View>
            {/* <Image source={require('../../assets/imgs/icon.png')}> */}
            <Text>Bem vindo!</Text>
        </View>
    )
}
