import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input:{
      marginTop:10,
      padding:10,
      width:300,
      backgroundColor:'#fff',
      fontSize: 16,
      fontWeight: 'bold',
      borderColor:'#000',
      borderRadius: 1
      
     
    },
    titulo:{
      fontSize: 25,
      color: '#635D5D',
      fontWeight: 'bold'
      
    },
    botao:{
      width:300,
      height:40,
      backgroundColor: '#FF0000',
      marginTop: 10,
      borderRadius: 4,
      alignItems: 'center',
      justifyContent:'center'
    },
    textBotao:{
      fontSize: 16,
      fontWeight: 'bold',
      color: '#fff'
    },
    messageError:{
      fontSize: 14,
      fontWeight: 'bold',
      color: '#FF0000'
    }
  });
  export default styles;