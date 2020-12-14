import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import styles from './style'

export default function DetalhesInscricao() {

    const [minhasVagas, setMinhasVagas] = useState([]);
    let id = sessionStorage.getItem("id-inscricao");
    let dadosArray :any = [];

    useEffect(() => {
        CarregarVagas();
    }, []);

    function CarregarVagas() {
        fetch('http://localhost:5000/api/Inscricao/' + id, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
                //authorization: 'Bearer ' + localStorage.getItem('token-senaivagas')
            }
        })
            .then(response => response.json())
            .then(dados => {
                dadosArray = [dados];
                console.log(dadosArray);
                setMinhasVagas(dadosArray);
                
            })
    }

    return (
        <View style={styles.containerall}>
            {/* <Image source={require('../../assets/imgs/icon.png')} style={{ width: 40, height: 40 }} /> */}
                {
                    minhasVagas.map((item: any) => {
                        return (

                            <View style={styles.containerinfo}>
                                <Text style={styles.title}>Título</Text>
                                <Text style={styles.conteudo}>{item.idVagaNavigation.cargo}</Text>
                                <View style={styles.linha}></View>
                                    <Text style={styles.title}>Descricao da vaga</Text>
                                    <Text style={styles.conteudo}>{item.idVagaNavigation.descricao}</Text>
                                <View style={styles.linha}></View>
                                    <Text style={styles.title}>Requisitos e Skills</Text>
                                    <Text style={styles.conteudo}>{item.idVagaNavigation.habilidades}</Text>
                                <View style={styles.linha}></View>
                                    <Text style={styles.title}>Sobre a empresa</Text>
                                    <Text style={styles.conteudo}>{item.idVagaNavigation.fkEmpresaNavigation.apresentacao}</Text>
                                <View style={styles.linha}></View>
                                    <Text style={styles.title}>Contato</Text>
                                    <Text style={styles.conteudo}>{item.idVagaNavigation.fkEmpresaNavigation.emailContato}</Text>
                                <View style={styles.linha}></View>
                            </View> 
                        );
                    })
                }
        </View>
    );
}
