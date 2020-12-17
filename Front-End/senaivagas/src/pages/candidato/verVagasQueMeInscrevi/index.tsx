import React, { useEffect, useState } from 'react';
import './style.css';
import '../../../assets/styles/global.css';
import Footer from '../../../components/footer';
import ibmLogo from '../../../assets/images/bandai-namco-logo.png'
import Header from '../../../components/header/index';
import { Link } from 'react-router-dom';
import CampoDeBusca from '../../../components/campo-de-busca';

function MinhasVagas() {

    const [minhasVagas, setMinhasVagas] = useState([]);
    let idUser = localStorage.getItem("idUser")

    useEffect(() => {
        buscaMinhasVagas();
    }, []);

    function pegaId(item: any) {
        localStorage.setItem('id-vaga-inscrita', item);
        //navigation.navigate('Details')
    }

    function buscaMinhasVagas() {
        fetch('http://localhost:5000/api/Inscricao/candidato/'+ idUser, {
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
        <div>

            <Header>
                <li><Link className="link" to="/vagas">Vagas Gerais</Link></li>
                <li><Link className="link" to="/minhas-vagas">Minhas Vagas</Link></li>
                <li><Link className="link" to="/dicas">Dicas</Link></li>
                <li><Link className="link" to="/perfil">Meu Perfil</Link></li>
                <li><Link className="link" to="/">Sair</Link></li>
            </Header>

            <main id="mainMinhasVagas">

                <CampoDeBusca />
                <section className="container-geral-minhasVagas">

                    {
                        minhasVagas.map((item: any) => {
                            return (

                                <div className="alinha-linha" onClick={() => pegaId(item.idVaga)} >
                                    <div className="container-individual-minhasVagas">
                                        <img src={ibmLogo} alt="" />
                                        <div className="container-2">
                                            <p className="cargo-text">{item.idVagaNavigation.cargo}</p>
                                            <p className="nome-empresa-text">{item.idVagaNavigation.fkEmpresaNavigation.razaoSocial}</p>
                                        </div>

                                        <div className="container-4">
                                            <p className="local-title"><b>Status</b></p>
                                            <p className="local-text"> 
                                            {
                                                item.statusIncricao == false &&
                                                "Em andamento"
                                            }
                                            {
                                                    item.statusIncricao == true &&
                                                    "Finalizado"
                                            }</p>
                                        </div>
                                    </div>
                                    <div className="blue-div"></div>
                                </div>

                            )
                        }

                        )
                    }



                </section>
            </main>

            <Footer />
        </div>
    )
}

export default MinhasVagas;