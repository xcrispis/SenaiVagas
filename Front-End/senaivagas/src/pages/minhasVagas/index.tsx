import React, { useEffect, useState } from 'react';
import './style.css';
import '../../assets/styles/global.css';
import Footer from '../../components/footer';
import ibmLogo from '../../assets/images/ibmlogo.png';

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
                //authorization: 'Bearer ' + localStorage.getItem('token-filmes')
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
            <main id="mainMinhasVagas">
                <section className="container-geral-minhasVagas">
                    {
                        minhasVagas.map((item: any) => {
                            let status;
                            
                            function dado() {
                                if (item.statusIncricao === false) {
                                   status = 'Em Andamento'
                                } else { status = 'Terminado' }
                            }
                            dado();
                            return (
                                <div className="alinha-linha">
                                    <div key={item.idInscricao} className="container-individual-minhasVagas">
                                        <img src={ibmLogo} alt="" />
                                        <div className="container-2">
                                            <p className="cargo-text">Desenvolvedor(a) Front-End Junior.</p>
                                            <p className="nome-empresa-text"> International Business Machines Corporation</p>
                                        </div>

                                        <div className="container-4">
                                            <p className="local-title"><b>Status</b></p>
                                            <p className="local-text">{status}</p>
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