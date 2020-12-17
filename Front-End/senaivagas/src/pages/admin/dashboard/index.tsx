import React, { useEffect, useState } from 'react';
import Header from '../../../components/header/index';
import Footer from '../../../components/footer/index';
import Button from '../../../components/button/index';
import Logo from '../../../assets/images/sn_icon.svg';
import { Link, useHistory } from 'react-router-dom';

import './style.css';
import '../../../assets/styles/global.css';

function Dashboard() {

    const [dadoEmpresa, setEmpresa] = useState([]);
    const [statusEmpresa, setStatusEmpresa] = useState(1);
    // function executarAcao(linha:any) {
    //     linha.style.backgroundColor = "#ff0000";
    // }
    let history = useHistory();

    useEffect(() => {
        listarSolicitacoes();
    }, []);

    const listarSolicitacoes = () => {
        fetch('http://localhost:5000/api/Empresa', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(dados => {
                setEmpresa(dados);
                console.log(dados);
            })
    }

    const aceitarEmpresa = (id: any) => {

        const form = {
            statusEmpresa: statusEmpresa
        }

        fetch('http://localhost:5000/api/Empresa/' + id, {
            method: 'PATCH',
            body: JSON.stringify(form),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(() => {
                console.log(form);
                setStatusEmpresa(0);
                localStorage.setItem('id-empresa', id);
                console.log(localStorage.getItem('id-empresa'));
                alert('Empresa foi aceita com sucesso');
                history.go(0);
            })
            .catch(err => console.error(err));
    }

    const recusarEmpresa = (id: any) => {
        if (window.confirm('Deseja recusar a Empresa ?')) {
            fetch('http://localhost:5000/api/Empresa/' + id, {
                method: 'DELETE'
            })
                .then(() => {
                    localStorage.setItem('id-empresa', id);
                    alert('Empresa recusada com sucesso');
                    history.go(0);
                })
                .catch(err => console.error(err));
        }
    }

    const solicitacoesEmpresas = () => {
        dadoEmpresa.map((item: any) => {
            return (
                <div key={item.idEmpresa} className="dashboard-geral">
                    <div className="row-dashboard">

                        <div className="dados-empresa">
                            <div className="logos">
                                <img className="logo" src={Logo} alt="Logo empresa" />
                            </div>

                            <div className="apresentacao">
                                <h3>Apresentação</h3>
                                <p>{item.apresentacao}</p>
                            </div>

                            <div className="contato">
                                <h3>Contato</h3>
                                <p>{item.nomeResponsavel}, {item.emailContato}</p>
                            </div>
                        </div>

                        <div className="botoes" >
                            <div className="aceitar" onClick={() => aceitarEmpresa(item.idEmpresa)} >
                                <Button value="Aceitar" />
                            </div>

                            <div className="recusar" onClick={() => recusarEmpresa(item.idEmpresa)} >
                                <Button value="Recusar" />
                            </div>
                        </div>
                    </div>

                    <div className="try">
                        <div className="divisoria"></div>
                    </div>
                </div>
            )
        })
    }

    function teste() {
        let element = document.getElementById("hidden-empresas");
        element?.classList.add("hidden");

        let element2 = document.getElementById("contrato-hiden");
        element2?.classList.remove("hidden");

        let element3 = document.getElementById("empresa-linha");
        element3?.classList.remove("linha-dashboard");

        let element4 = document.getElementById("empresa-linha");
        element4?.classList.add("linha-dashboard");

        let element5 = document.getElementById("linha-empresa");
        element5?.classList.remove("linha-clicked");

        let element6 = document.getElementById("h2");
        element6?.classList.remove("h2");

        let element7 = document.getElementById("h2-contrato");
        element7?.classList.add("h2");

        let element8 = document.getElementById("contrato-linha");
        element8?.classList.remove("linha-dashboard");

        let element9 = document.getElementById("linha-contrato");
        element9?.classList.add("linha-clicked");

        let element10 = document.getElementById("divisoria-hidden");
        element10?.classList.remove("hidden");

        let element11 = document.getElementById("contrato-hidden");
        element11?.classList.remove("hidden");
    }

    function listarEmpresas() {
        let element = document.getElementById("hidden-empresas");
        element?.classList.remove("hidden");

        let element2 = document.getElementById("linha-empresa");
        element2?.classList.add("linha-clicked");

        let element3 = document.getElementById("h2");
        element3?.classList.add("h2");

        let element4 = document.getElementById("empresa-linha");
        element4?.classList.remove("linha-dashboard");

        let element5 = document.getElementById("contrato-hidden");
        element5?.classList.add("hidden");

        let element6 = document.getElementById("divisoria-hidden");
        element6?.classList.add("hidden");

        let element7 = document.getElementById('bottom');
        element7?.classList.add("bottom");

        let element8 = document.getElementById('h2-contrato');
        element8?.classList.remove("h2");

        let element9 = document.getElementById('linha-contrato');
        element9?.classList.remove("linha-clicked");

        let element10 = document.getElementById('contrato-linha');
        element10?.classList.add("linha-dashboard");
    }

    return (
        <div>

            <Header>
                <li><Link className="link" to="/">Sair</Link></li>
            </Header>

            <div id="contrato" className="container-dashboard">
                <div className="contrato" onClick={() => teste()}>
                    <div id="h2-contrato"><h2>Gerenciar Contratos</h2></div>
                    <div id="linha-contrato"><div id="contrato-linha" className="linha-dashboard"></div></div>
                </div>

                <div className="linha-central"></div>

                <div className="empresas" onClick={() => listarEmpresas()} >
                    <div id="h2"><h2>Solicitações de Empresas</h2></div>
                    <div id="linha-empresa"><div id="empresa-linha" className="linha-dashboard"></div></div>
                </div>
            </div>

            <div id="hidden-empresas" className="hidden">
                {
                    dadoEmpresa.map((item: any) => {
                        return (
                            <div key={item.idEmpresa} className="dashboard-geral">
                                <div className="row-dashboard">

                                    <div className="dados-empresa">
                                        <div className="logos">
                                            <img className="logo" src={Logo} alt="Logo empresa" />
                                        </div>

                                        <div className="apresentacao">
                                            <h3>Apresentação</h3>
                                            <p>{item.apresentacao}</p>
                                        </div>

                                        <div className="contato">
                                            <h3>Contato</h3>
                                            <p>{item.nomeResponsavel}, {item.emailContato}</p>
                                        </div>
                                    </div>

                                    <div className="botoes" >
                                        <div className="aceitar" onClick={() => aceitarEmpresa(item.idEmpresa)} >
                                            <Button value="Aceitar" />
                                        </div>

                                        <div className="recusar" onClick={() => recusarEmpresa(item.idEmpresa)} >
                                            <Button value="Recusar" />
                                        </div>
                                    </div>
                                </div>

                                <div className="try">
                                    <div className="divisoria"></div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div id="contrato-hidden" className="flex">
                <div className="contratos">
                    <div className="logos-dashboard">
                        <img className="logo-dashboard" src={Logo} alt="Logo empresa" />
                    </div>

                    <div className="cpf-aluno">
                        <h3>Cpf Aluno</h3>
                        <p>123.123.123-12</p>
                    </div>

                    <div className="curso">
                        <h3>Curso</h3>
                        <p>Desenvolvimento de Sistemas</p>
                    </div>

                    <div className="inicio">
                        <h3>Inicio</h3>
                        <p>01/01/2021</p>
                    </div>

                    <div className="termino">
                        <h3>Término Previsto</h3>
                        <p>01/01/2021</p>
                    </div>

                    <div className="status">
                        <h3>Status</h3>
                        <p>Em andamento</p>
                    </div>
                </div>
            </div>

            <div id="divisoria-hidden">
                <div className="try">
                    <div className="divisoria"></div>
                </div>
            </div>

            <div id="bottom" className="try-it">
                <Footer />
            </div>

        </div>
    );
}

export default Dashboard;