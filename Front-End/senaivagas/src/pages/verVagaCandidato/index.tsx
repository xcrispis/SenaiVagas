import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Footer from '../../components/footer/index';
import Logo from '../../assets/images/ibmlogo.png';
import Button from '../../components/button/index';
import Header from '../../components/header/index';

import '../../assets/styles/global.css';
import './style.css';
import { parseJwt } from '../../services';

function VerVagaCandidato() {

    let history = useHistory();
    const [dadoVaga, setDadoVaga] = useState([]);
    let id = localStorage.getItem("id-vaga");


    const candidatar = () => {
        let idUser = parseJwt().jti
        console.log(parseJwt());

        const form = {
            StatusIncricao: 0,
            IdVaga: id,
            FkCandidato: idUser
        }
        
        fetch('http://localhost:5000/api/Inscricao', {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                'content-type': 'application/json'
                //authorization: 'Bearer ' + localStorage.getItem('token-senaivagas')
            }
        })
            .then(response => response.json())
            .then(() => {
                alert('Cadidatado com sucesso');
                history.push("/vagas");        
            })
    }

    useEffect(() => {
        carregaDadosVaga();
        
    }, []);

    function carregaDadosVaga() {
        let idUser = parseJwt().jti
        console.log(parseJwt());
        
        fetch('http://localhost:5000/api/Vaga/' + id, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
                //authorization: 'Bearer ' + localStorage.getItem('token-senaivagas')
            }
        })
            .then(response => response.json())
            .then(dados => {
                setDadoVaga(dados);
                console.log(dados);
                
            })
    }


    return (
        <div>

            <Header/>
            <main id="main-verVagaCandidato">

                <div className="logos">
                    <img className="logo" src={Logo} alt="Logo empresa" />
                </div>

                <div className="cargo">
                    <h2>Desenvolvedor Front-End</h2>
                </div>
                <div className="view-contrato">
                    {
                        

                           dadoVaga.map((item:any) => {
                                 return (
                                    <div >
                        <div className="dados">
                            <h2>Descrição da vaga:</h2>
                                 <p>{item.descricao}</p>
                        </div>

                        <div className="linha"></div>

                        <div className="dados">
                            <h2>Requisitos e Skills</h2>
                                 <p>{item.habilidades}</p>
                        </div>

                        <div className="linha"></div>

                        <div className="dados">
                            <h2>Sobre a empresa</h2>
                                 <p> {item.fkEmpresaNavigation.apresentacao}</p>
                        </div>

                        <div className="linha"></div>

                        <div className="dados">
                            <h2>Contato:</h2>
                            <p>Envie currículo para {item.fkEmpresaNavigation.emailContato}  </p>
                           
                        </div>

                        <div className="linha"></div>
                    </div>
                                 )}
                             )
                    }


                </div>

                <div className="botao-editar">
                    <form onSubmit={event => {
                    event.preventDefault();
                    candidatar();
                    }}>
                        <Button value="CANDIDATAR-SE"/>
                    </form>
                </div>

            </main>
            <Footer />

        </div>
    );
}

export default VerVagaCandidato;