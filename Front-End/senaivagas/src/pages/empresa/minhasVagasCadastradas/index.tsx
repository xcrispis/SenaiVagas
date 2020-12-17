import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './style.css';
import '../../../assets/styles/global.css';
import ibm from '../../../assets/images/bandai-namco-logo.png'
import Header from '../../../components/header/index';
import Footer from '../../../components/footer/index'
// import ibmLogo from '../../assets/images/ibmlogo.png';
import CampoDeBusca from '../../../components/campo-de-busca/index';


function MinhasVagasCadastradas() {

    let history = useHistory();
    let idUsuario = localStorage.getItem("idUser");


    const [vagas, setVagas] = useState([]);

    useEffect(() => {
        buscaVagas();
    }, []);

    function buscaVagas() {
        console.log('chegouaqu  n?')
        fetch('http://localhost:5000/api/Vaga/empresa/' + idUsuario, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
                //authorization: 'Bearer ' + localStorage.getItem('token-senaivagas')
            }
        })
            .then(response => response.json())
            .then(dados => {
                setVagas(dados);

            })
            .catch(error => console.log(error))
    }



    function pegaId(item: any) {
        localStorage.setItem('id-vaga', item);
        history.push('/ver-candidatos');
    }

    return (
        <div>

            <Header>
                <li><Link className="link" to="/cadastro-vaga">Cadastrar Vagas</Link></li>
                <li><Link className="link" to="/minhas-vagas-empresa">Minhas Vagas</Link></li>
                <li><Link className="link" to="/perfil-Empresa">Meu Perfil</Link></li>
                <li><Link className="link" to="/">Sair</Link></li>
            </Header>
            <main id="mainVagasGerais">
                <CampoDeBusca />
                <section className="container-geral">

                    {

                        vagas.map((item: any) => {
                            return (
                                <div onClick={() => pegaId(item.idVaga)} className="alinha-linha">
                                    <div key={item.idVaga} className="container-individual">
                                    <img src={ibm} alt="" />
                                        <div className="container-2">
                                            <p className="cargo-text">{item.cargo}</p>
                                            <p className="nome-empresa-text">{item.fkEmpresaNavigation.razaoSocial}</p>
                                        </div>

                                        <div className="container-3">
                                            <div className="mini-container">
                                                <p className="local-title">Local</p>
                                                <p className="local-text">Home Office</p>
                                            </div>
                                            <div className="mini-container">
                                                <p className="habilidades-title">Habilidades Requeridas</p>
                                                <p className="habilidades-text">{item.habilidades}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blue-div"></div>
                                </div>
                            )
                        })
                    }

                </section>
            </main>
            <Footer />
        </div>)
}





export default MinhasVagasCadastradas;
