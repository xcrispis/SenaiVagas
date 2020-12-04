import { StyleSheet } from 'react-native';

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
    },
    alinhaCargoText: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EBEBEB',
        textAlign: 'center',
        borderRadius: 4,
        padding: '1vw',
        width: '55vw',
        marginRight: '1vw',
        height: '13vw',
    
      },
    cargoText: {
        fontWeight: 'bold',
      },

});

export default styles;