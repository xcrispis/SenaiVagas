import React, { useEffect }  from 'react';
import { View, Image, Text } from 'react-native';
import Header from '../../components/header/index';
import styles from './style';

export default function sair({navigation}){
    useEffect( () => {
        logout();
      }, []);
    function logout()
    {
        localStorage.clear();
        sessionStorage.clear();
        navigation.navigate('Home')
    }
    return (
    <View style={styles.container}>
        <Header />
        <Text>Saindo</Text>
    </View>
    )
}