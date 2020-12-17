import React, { useState, useEffect } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import '../../../assets/styles/global.css';
import ibm from '../../../assets/images/bandai-namco-logo.png'
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
                <li><Link className="link" to="/cadastro-vaga">Cadastrar Vagas</Link></li>
                <li><Link className="link" to="/minhas-vagas-empresa">Minhas Vagas</Link></li>
                <li><Link className="link" to="/perfil-Empresa">Meu Perfil</Link></li>
                <li><Link className="link" to="/">Sair</Link></li>
            </Header>
            <main id="main-perfil">
                <section>

                    {
                        dadosUsuario.map((item: any) => {
                            return (

                                <div id="lado-direitoPerfilEmpresa">
                                    <img src={ibm} alt="" />
                                    <p className="dado-usuario" id="razaoSocial" ><b>{item.razaoSocial}</b></p>


                                    <div id="apresentacao-txt-box">
                                        <div><b>Sobre Nós</b></div>
                                        <p>
                                            {item.apresentacao}
                                        </p>
                                    </div>


                                    <div className="lado-direito-direita">
                                        <p className="dado-usuario"><b>Telefone:</b> {item.telefone}</p>
                                        <p className="dado-usuario"><b>CNPJ:</b> {item.cnpj}</p>
                                        <p className="dado-usuario"><b>Email:</b> {item.emailContato}</p>
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