import { DrawerActions } from '@react-navigation/native';
import React from 'react';
import { View, Image, TouchableOpacity  } from 'react-native';
import styles from './style'

export default function Header() {
    function abrirDrawwer()
    {
        console.log('abriu do lado');
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={()  => abrirDrawwer()}>
                    <Image style={styles.img} source={require('../../assets/imgs/baseline_menu_white_18dp.png')}/>
                </TouchableOpacity>
                <Image style={styles.imgLogo} source={require('../../assets/imgs/solidbranco.png')}/>
            </View>
        </View>
        
    );
}
