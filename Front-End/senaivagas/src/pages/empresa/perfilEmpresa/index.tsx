import React, { useState, useEffect } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import '../../../assets/styles/global.css';
import imb from '../../../assets/images/person_110935.png'
import Footer from '../../../components/footer';
import Header from '../../../components/header/index';
import { parseJwt } from '../../../services';

function PerfilEmpresa() {

    const [dadosUsuario, setDadosUsuario] = useState([]);
    let dadosColetados: any = [];
    let idUsuario = parseJwt().jti;


    useEffect(() => {
        buscaEmpresa();
    }, []);

    function buscaEmpresa() {
        fetch('http://localhost:5000/api/Empresa/' + idUsuario, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
                //authorization: 'Bearer ' + localStorage.getItem('token-senaivagas')
            }
        })
            .then(response => response.json())
            .then(dados => {
                dadosColetados = [dados];
                setDadosUsuario(dadosColetados);


            })

    }

    console.log(dadosUsuario);
    return (
        <div>
            <Header>
                <li><Link className="link" to="/vagas">Vagas Gerais</Link></li>
                <li><Link className="link" to="/minhas-vagas">Minhas Vagas</Link></li>
                <li><Link className="link" to="/dicas">Dicas</Link></li>
                <li><Link className="link" to="/perfil">Meu Perfil</Link></li>
            </Header>
            <main id="main-perfil">
                <section id="lado-esquerdo">
                    <div className="foto-perfil">
                        <img src={imb} alt="" />
                    </div>
                    <div id="perfil-psicologico">
                        <ul>
                            <li value="100"><b>Gato:</b> 25%</li>
                            <li><b>Lobo:</b> 25%</li>
                            <li><b>Aguia:</b> 25%</li>
                            <li><b>Tubarão:</b> 25%</li>
                        </ul>
                    </div>
                </section>

                <section id="lado-direito">
                    {

                        dadosUsuario.map((item: any) => {
                            return (
                                <div id="formatingPerfil">
                                    <div key={dadosColetados.idCandidato} id="container-dados-esq-dir">
                                        <div className="lado-direito-direita">
                                            <p className="dado-usuario"><b>Nome:</b> {item.nome} {item.sobrenome}</p>
                                            <p className="dado-usuario"><b>Telefone: {item.telefone}</b></p>
                                            <p className="dado-usuario"><b>CPF:</b> {item.cpf}</p>
                                            <p className="dado-usuario"><b>Email:</b> {item.emailContato}</p>
                                        </div>

                                        <div id="lado-direito-esquerda">
                                            <p className="dado-usuario"><b>Endereço:</b> Rua Jorge e Matheus, 311.</p>
                                            <p className="dado-usuario"><b>Situação:</b> Em busca de emprego.</p>
                                            <p className="dado-usuario"><b>Github:</b> {item.gitHub}</p>
                                            <p className="dado-usuario"><b>Linkedin:</b> {item.linkedIn}</p>
                                        </div>
                                    </div>

                                    <div id="apresentacao-txt-box">
                                        <div><b>Descrição</b></div>
                                        <p>
                                        {item.apresentacao}
                                     </p>
                                    </div>
                                </div>

                            )
                        })
                    }



                </section>
            </main>

            <Footer />
        </div>
    )
}

export default PerfilEmpresa;