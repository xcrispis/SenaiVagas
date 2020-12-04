import React from 'react';
import { View, Image } from 'react-native';
import styles from './style'

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.img} source={require('../../assets/imgs/baseline_menu_white_18dp.png')}/>
            </View>
        </View>
        
    );
}
