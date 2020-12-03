import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import  './style.tsx'


export default function App() {

  const [minhasVagas, setMinhasVagas] = useState([]);

  useEffect(() => {
    ListarVagas();
  }, []);

  function ListarVagas() {
    fetch('http://localhost:5000/api/Inscricao', {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
        //authorization: 'Bearer ' + localStorage.getItem('token-senaivagas')
      }
    })
      .then(response => response.json())
      .then(dados => {
        setMinhasVagas(dados);

      })
  }

  function pegaId(item: any) {
    localStorage.setItem('id-vaga', item);
    //navigation.navigate('Details')
  }

  console.log(minhasVagas);




  return (
    <View style={styles.container}>
      <View style={styles.containerGeralMinhasVagas}>


        {
          minhasVagas.map((item: any) => {
            return (

              <View style={styles.alinhaLinha}>

                <TouchableOpacity onPress={() => pegaId(item.idVaga)} style={styles.containerIndividualMinhasVagas}>
                  <View style={styles.containerArea1}>
                    <View style={styles.alinhaCargoText}>
                    <Text style={styles.cargoText}>{item.idVagaNavigation.cargo}</Text>
                    </View>
                    <View style={styles.containerStatus}>
                      <Text style={styles.localTitle}>Status</Text>
                      <Text style={styles.localText}>Em andamento</Text>
                    </View>

                  </View>

                  <View style={styles.containerNomeEmpresa}>
                    <Text style={styles.nomeEmpresaText}> {item.idVagaNavigation.fkEmpresaNavigation.razaoSocial}</Text>
                  </View>
                </TouchableOpacity>

                <View style={styles.blueView}></View>
              </View>

            );
          })
        }



      </View>
    </View>
  );
}

