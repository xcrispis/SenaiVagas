import React, { useState, useEffect } from 'react';
import {Link, useHistory} from 'react-router-dom';
import './style.css';
import '../../assets/styles/global.css';
import ibmLogo from '../../assets/images/ibmlogo.png';
import CampoDeBusca from '../../components/campo-de-busca/index';


function VagasGerais() {

    let history = useHistory();


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
                console.log(dados);
            })
    }

    function pegaId(item:any) {
            localStorage.setItem('id-vaga', item);
            history.push('/verVaga');
          }
    



    return (
        <div>
            <main id="mainVagasGerais">
                <CampoDeBusca />
                <section className="container-geral">

                    {
                        vagas.map((item: any) => {
                            return (
                                <div onClick={() => pegaId(item.idVaga)} className="alinha-linha">
                                    <div key={item.IdVaga} className="container-individual">
                                        <img alt="" />
                                        <div className="container-2">
                                            <p className="cargo-text">Desenvolvedor(a) Front-End Junior.</p>
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
        </div>)
}





export default VagasGerais;
