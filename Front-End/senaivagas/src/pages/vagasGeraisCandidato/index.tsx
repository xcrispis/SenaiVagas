import React, { useState, useEffect } from 'react';
import './style.css';
import '../../assets/styles/global.css';
import ibmLogo from '../../assets/images/ibmlogo.png';
import CampoDeBusca from '../../components/campo-de-busca/index';


function vagasGerais() {


    const [vagas, setVagas] = useState([]);

    useEffect(() => {
        buscaVagas();
    }, []);

    function buscaVagas() {
        fetch('http://localhost:5000/api/vaga', {
            method: 'GET',
            headers: {
            'content-type': 'application/json'
            //authorization: 'Bearer ' + localStorage.getItem('token-filmes')
        }
         })
         .then(response => response.json())
         .then(dados => {
             setVagas(dados);
         })
}



return (
    <div>
        <main>
            <CampoDeBusca />
            <section className="container-geral">
                <div className="alinha-linha">
                    <div className="container-individual">
                        <img src={ibmLogo} alt="" />
                        <div className="container-2">
                            <p className="cargo-text">Desenvolvedor(a) Front-End Junior.</p>
                            <p className="nome-empresa-text"> International Business Machines Corporation</p>
                        </div>

                        <div className="container-3">
                            <div className="mini-container">
                                <p className="local-title">Local</p>
                                <p className="local-text">Home Office</p>
                            </div>
                            <div className="mini-container">
                                <p className="habilidades-title">Habilidades Requeridas</p>
                                <p className="habilidades-text">Html, Css, Javascript, React e AngularJS</p>
                            </div>
                        </div>
                    </div>
                    <div className="blue-div"></div>
                </div>

                <div className="alinha-linha">
                    <div className="container-individual">
                        <img src={ibmLogo} alt="" />
                        <div className="container-2">
                            <p className="cargo-text">Desenvolvedor(a) Front-End Junior.</p>
                            <p className="nome-empresa-text"> International Business Machines Corporation</p>
                        </div>

                        <div className="container-3">
                            <div className="mini-container">
                                <p className="local-title">Local</p>
                                <p className="local-text">Home Office</p>
                            </div>
                            <div className="mini-container">
                                <p className="habilidades-title">Habilidades Requeridas</p>
                                <p className="habilidades-text">Html, Css, Javascript, React e AngularJS</p>
                            </div>
                        </div>
                    </div>
                    <div className="blue-div"></div>
                </div>


                <div className="alinha-linha">
                    <div className="container-individual">
                        <img src={ibmLogo} alt="" />
                        <div className="container-2">
                            <p className="cargo-text">Desenvolvedor(a) Front-End Junior.</p>
                            <p className="nome-empresa-text"> International Business Machines Corporation</p>
                        </div>

                        <div className="container-3">
                            <div className="mini-container">
                                <p className="local-title">Local</p>
                                <p className="local-text">Home Office</p>
                            </div>
                            <div className="mini-container">
                                <p className="habilidades-title">Habilidades Requeridas</p>
                                <p className="habilidades-text">Html, Css, Javascript, React e AngularJS</p>
                            </div>
                        </div>
                    </div>
                    <div className="blue-div"></div>
                </div>


                <div className="alinha-linha">
                    <div className="container-individual">
                        <img src={ibmLogo} alt="" />
                        <div className="container-2">
                            <p className="cargo-text">Desenvolvedor(a) Front-End Junior.</p>
                            <p className="nome-empresa-text"> International Business Machines Corporation</p>
                        </div>

                        <div className="container-3">
                            <div className="mini-container">
                                <p className="local-title">Local</p>
                                <p className="local-text">Home Office</p>
                            </div>
                            <div className="mini-container">
                                <p className="habilidades-title">Habilidades Requeridas</p>
                                <p className="habilidades-text">Html, Css, Javascript, React e AngularJS</p>
                            </div>
                        </div>
                    </div>
                    <div className="blue-div"></div>
                </div>
            </section>
        </main>

    </div>
)
}

export default vagasGerais;