import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginTop: 50
    },
    h1: {
      display: 'flex',
      fontSize: 24,
      fontWeight: 'bold'
    },
    containerGeral: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    alinhaAlinha: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    containerIndividual: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    img: {
      width: 325,
      height: 100,
      marginTop: 30,
      marginBottom: 10,
      display: 'flex',
      justifyContent: 'center'
    },
    container2: {
      padding: 0,
      margin: 0,
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 5
    },
    cargoText: {
      backgroundColor: '#EBEBEB',
      textAlign: 'center',
      borderRadius: 4,
      padding: 0.4,
      width: 150,
      fontWeight: 'bold'
    },
    nomeEmpresa: {
      backgroundColor: '#000000',
      color: 'white',
      textAlign: 'center',
      borderRadius: 4,
      marginTop: 3,
      padding: 0.4,
      width: 150,
      fontWeight: 'bold'
    },
    container4: {
      display: 'flex',
      backgroundColor: "#EBEBEB",    
      margin: 0,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 2,
      borderRadius: 4,
      width: 150,
      height: 74,
      marginRight: 15
    },
    localText: {
      color: 'black',
      margin: 0
    },
    localTitle: {
      color: '#F55050',
      fontWeight: 'bold',
      margin: 0
    }
  });

export default styles;