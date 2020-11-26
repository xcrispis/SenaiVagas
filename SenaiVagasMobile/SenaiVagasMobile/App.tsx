import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function App() {

  const [minhasVagas, setMinhasVagas] = useState([]);

  useEffect(()=>{
    ListarVagas();
},[] );

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
          console.log(dados);
      })
}




  return (
    <View style={styles.container}>
      <View style={styles.containerGeralMinhasVagas}>
        <View style={styles.alinhaLinha}>

          <TouchableOpacity style={styles.containerIndividualMinhasVagas}>
            <View style={styles.containerArea1}>
              <Text style={styles.cargoText}>Desenvolvedor(a) Front-End Junior.</Text>
              <View style={styles.containerStatus}>
                <Text style={styles.localTitle}>Status</Text>
                <Text style={styles.localText}>Em andamento</Text>
              </View>

            </View>

            <View style={styles.containerNomeEmpresa}>
              <Text style={styles.nomeEmpresaText}> International Business Machines Corporation</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.blueView}></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerGeralMinhasVagas: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  alinhaLinha: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerIndividualMinhasVagas: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    width: '70vw',
  },
  containerArea1: {
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  cargoText: {
    backgroundColor: '#EBEBEB',
    textAlign: 'center',
    borderRadius: 4,
    padding: '1vw',
    width: '55vw',
    marginRight: '1vw',
    height: '13vw',
    fontWeight: 'bold'
  },
  nomeEmpresaText: {
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center',
    padding: '0.4vw',
    fontWeight: 'bold',
  },
  containerStatus: {
    display: 'flex',
    backgroundColor: '#EBEBEB',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.4vw',
    borderRadius: 4,
    width: '30vw',
    height: '13vw',
  },
  localTitle: {
    color: '#F55050',
    fontWeight: 'bold',
    margin: 0,
  },
  localText: {
    color: 'black',
    margin: 0,
  },
  blueView: {
    border: '1px solid #509BF5',
    padding: 0,
    margin: 0,
    width: '90vw',
    marginTop: '2vh',
    marginBottom: '2vh',
  },
  containerNomeEmpresa: {
    width: '86vw',
    height: '8vw',
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: '2vw',
  }




});
