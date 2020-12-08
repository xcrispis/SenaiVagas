import React from 'react';
import Header from '../../../components/header/index';
import Footer from '../../../components/footer/index';
import { Link } from 'react-router-dom';
import imgCandidato from '../../../assets/images/person_110935.png';
import imgEmpresa from '../../../assets/images/work-24px.svg';
import Button from '../../../components/button/index';

import './style.css';
import '../../../assets/styles/global.css';

function Home() {
    return (
        <div>
            <Header>
                <li><Link className="link" to="/login">Login</Link></li>
            </Header>

            <main id="main-home">
                <h1 id="homeH1">Cadastre-se para dar e aproveitar novas oportunidades!</h1>
                <div className="row-home">
                    <div className="quadrado">
                        <div className="div-imgEmpresa">
                            <img className="imgEmpresa" src={imgEmpresa} alt="" />
                        </div>

                       
                        <Link className="link-home" to="/cadastro-empresa"><Button value="Empresa" /></Link>
                    </div>

                    <div className="quadrado">
                        <div className="div-imgCandidato">
                            <img className="imgCandidato" src={imgCandidato} alt="" />
                        </div>

                        
                        <Link className="link-home" to="/cadastro-aluno"><Button value="Candidato" /></Link>
                    </div>
                </div>

            </main>


            <Footer />
        </div>
    );
}

export default Home;