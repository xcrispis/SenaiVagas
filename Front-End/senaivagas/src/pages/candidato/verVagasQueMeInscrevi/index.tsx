import React, { useEffect, useState } from 'react';
import './style.css';
import '../../../assets/styles/global.css';
import Footer from '../../../components/footer';
import ibmLogo from '../../../assets/images/ibmlogo.png';
import Header from '../../../components/header/index';
import { Link } from 'react-router-dom';
import CampoDeBusca from '../../../components/campo-de-busca';

function MinhasVagas() {

    const [minhasVagas, setMinhasVagas] = useState([]);

    useEffect(() => {
        buscaMinhasVagas();
    }, []);

    function buscaMinhasVagas() {
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
        <div>

            <Header>
                <li><Link className="link" to="/vagas">Vagas Gerais</Link></li>
                <li><Link className="link" to="/minhas-vagas">Minhas Vagas</Link></li>
                <li><Link className="link" to="/dicas">Dicas</Link></li>
                <li><Link className="link" to="/perfil">Meu Perfil</Link></li>
            </Header>

            <main id="mainMinhasVagas">

                <CampoDeBusca />
                <section className="container-geral-minhasVagas">


                    <div className="alinha-linha">
                        <div className="container-individual-minhasVagas">
                            <img src={ibmLogo} alt="" />
                            <div className="container-2">
                                <p className="cargo-text">Desenvolvedor(a) Front-End Junior.</p>
                                <p className="nome-empresa-text"> International Business Machines Corporation</p>
                            </div>

                            <div className="container-4">
                                <p className="local-title"><b>Status</b></p>
                                <p className="local-text">Em andamento</p>
                            </div>
                        </div>
                        <div className="blue-div"></div>
                    </div>

                    <div className="alinha-linha">
                        <div className="container-individual-minhasVagas">
                            <img src={ibmLogo} alt="" />
                            <div className="container-2">
                                <p className="cargo-text">Desenvolvedor(a) Front-End Junior.</p>
                                <p className="nome-empresa-text"> International Business Machines Corporation</p>
                            </div>

                            <div className="container-4">
                                <p className="local-title"><b>Status</b></p>
                                <p className="local-text">Em andamento</p>
                            </div>
                        </div>
                        <div className="blue-div"></div>
                    </div>

                    <div className="alinha-linha">
                        <div className="container-individual-minhasVagas">
                            <img src={ibmLogo} alt="" />
                            <div className="container-2">
                                <p className="cargo-text">Desenvolvedor(a) Front-End Junior.</p>
                                <p className="nome-empresa-text"> International Business Machines Corporation</p>
                            </div>

                            <div className="container-4">
                                <p className="local-title"><b>Status</b></p>
                                <p className="local-text">Em andamento</p>
                            </div>
                        </div>
                        <div className="blue-div"></div>
                    </div>



                </section>
            </main>

            <Footer />
        </div>
    )
}

export default MinhasVagas;