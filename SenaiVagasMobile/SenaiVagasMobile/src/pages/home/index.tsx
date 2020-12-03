import React  from 'react';
import { Text, View, Image } from 'react-native';
import styles from './style'

export default function Home(){
  return (
    <View style={styles.container}>
      <View style={styles.containerHome}>
        <Text style={styles.texto}>Em busca do seu primeito emprego na área de tecnologia?{"\n"} junte-se a nós e encontre as melhores vagas.</Text>
        <Image  style={styles.img} source={require('../../assets/imgs/imgEmpresa.png')}/>    
      </View>
    </View> 
  );
}