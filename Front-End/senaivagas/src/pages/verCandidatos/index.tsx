import React, { useEffect, useState } from 'react';
import Footer from '../../components/footer';
import './style.css'
import '../../assets/styles/global.css';

import ibmLogo from '../../assets/images/ibmlogo.png';
import Header from '../../components/header';

function verCandidatos() {

    return (
        <div>
            <Header/>
            <main id="main-verCandidatos"> 
                <h1 id="verVagas-h1-candidatos">CANDIDATOS</h1>
                <div className="blue-box-title"><b>DESCRIÇÃO</b></div>
                <div className="alinha-linha-verCandidatos">
                    <div className="container-individual">
                        <img src={ibmLogo} alt="" />
                        <div className="container-2-verCandidatos">
                            <p className="cargo-text-verCandidato">Desenvolvedor(a) Front-End Junior.</p>
                            <p className="nome-empresa-text-verCandidato"> International Business Machines Corporation</p>
                        </div>

                        <div className="container-3-verCandidatos">
                            <div className="mini-container-verCandidatos">
                                <p className="local-title-verCandidatos">Local</p>
                                <p className="local-text-verCandidatos">Home Office</p>
                            </div>
                            <div className="mini-container-verCandidatos">
                                <p className="habilidades-title-verCandidatos">Habilidades Requeridas</p>
                                <p className="habilidades-text-verCandidatos">Html, Css, Javascript, React e AngularJS</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-box">
                    <p>
                        - Área e especialização profissional: Informática, TI, Telecomunicações - Suporte Técnico<br />
                        - Nível hierárquico: Assistente<br />
                        - Local de trabalho: São Paulo ,SP<br />
                        - Manter os equipamentos em perfeito estado de funcionamento, manutenção técnica, limpeza geral,
                        acompanhamento de terceiros na solução dos problemas quando estes fogem de nossa alçada,
                        testes e vistorias frequentes nos dispositivos de segurança, conservação do aspecto visual, iluminação do ponto,
                        implantação, parte administrativa, com isso visando a satisfação do cliente.
                    </p>
                </div>
                <div className="blue-box-title"><b>CANDIDATOS CADASTRADOS</b> </div>

                <div className="container-candidato">
                    <div className="container-info-candidato">
                        <p className="info-candidato-title"><b>Informações do candidato:</b></p>
                        <ul className="info-candidato">
                            <li>Nome : Gustavo  Santos</li>
                            <li>Idade : 17 anos</li>
                            <li>Cidade onde Mora : São Paulo</li>
                            <li>Telefone: (11)98902-2928</li>
                        </ul>
                    </div>

                    <div className="curriculo-candidato">
                        <p className="curriculo-txt"><b>Curriculo do Candidato</b></p>
                        <div className="block-curriculo">Curriculo.PDF</div>
                    </div>

                    <div className="status-candidato">
                        <p className="status-txt"><b>Status</b></p>
                        <div className="block-status">Visto</div>
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    )
}

export default verCandidatos;