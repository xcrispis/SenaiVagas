import React, { useEffect }  from 'react';
import { View, Image, Text } from 'react-native';
import styles from './style'

export default function sair({navigation}){
    useEffect( () => {
        logout();
      }, []);
    function logout()
    {
        localStorage.clear();
        sessionStorage.clear();
        navigation.navigate('Home')}
    return (
    <View style={styles.container}>
        <Text>Até mais</Text>
    </View>
    )
}