import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import styles from './style';

export default function minhasVagas() {

  const [minhasVagas, setMinhasVagas] = useState([]);

  useEffect( () => {
    listarVagas();
  }, []);

  function listarVagas() {
    fetch('http://localhost:5000/api/vaga', {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then( response => response.json() )
      .then( dados => {
        setMinhasVagas( dados );
        console.log( dados );
      })
  } 
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Minhas Vagas</Text>
      <StatusBar style="auto" />
        <View style={styles.containerGeral}>
          <View style={styles.alinhaAlinha}>
              <Image 
                style={styles.img}
                source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
              />

                {
                  minhasVagas.map( (item: any) => {
                    return (
                      <View key={item.idVaga} style={styles.containerIndividual}>              
                        <View style={styles.container2}>
                          <Text style={styles.cargoText}>{item.descricao}</Text>
                          <Text style={styles.nomeEmpresa}>{item.fkEmpresaNavigation.razaoSocial}</Text>
                        </View>

                        <View style={styles.container4}>
                          <Text style={styles.localTitle}>Status</Text>
                          <Text style={styles.localText}>Em andamento</Text>
                        </View>
                      </View>
                    )
                  })
                }
          </View>
        </View>
    </View>
  );
}