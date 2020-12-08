import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../../components/footer';
import Header from '../../../components/header/index';
import './style.css';
import '../../../assets/styles/global.css';
import curriculoImg from '../../../assets/images/curriculo.png';
function Dicas() {
    return (
        <div>
            <Header>
                <li><Link className="link" to="/vagas">Vagas Gerais</Link></li>
                <li><Link className="link" to="/minhas-vagas">Minhas Vagas</Link></li>
                <li><Link className="link" to="/dicas">Dicas</Link></li>
                <li><Link className="link" to="/perfil">Meu Perfil</Link></li>
            </Header>
            <main id="mainDicas">
                    <div className="titulo">
                        <h1>Dicas</h1>
                    </div>
                    <div className="allDicas">
                        <div className="dica">
                            <img src={curriculoImg} alt="Dica1" />
                            <div className="info">
                                <h3>Curriculo</h3>
                                <p className="conteudoDica">Descubra como aperfeiçoar seu curriculo</p>
                                <p className="dataDica">26/10/2020</p>
                            </div>
                        </div>
                        <div className="dica">
                            <img src={curriculoImg} alt="Dica1" />
                            <div className="info">
                                <h3>Curriculo</h3>
                                <p className="conteudoDica">Descubra como aperfeiçoar seu curriculo</p>
                                <p className="dataDica">26/10/2020</p>
                            </div>
                        </div>
                        <div className="dica">
                            <img src={curriculoImg} alt="Dica1" />
                            <div className="info">
                                <h3>Curriculo</h3>
                                <p className="conteudoDica">Descubra como aperfeiçoar seu curriculo</p>
                                <p className="dataDica">26/10/2020</p>
                            </div>
                        </div>
                        <div className="dica">
                            <img src={curriculoImg} alt="Dica1" />
                            <div className="info">
                                <h3>Curriculo</h3>
                                <p className="conteudoDica">Descubra como aperfeiçoar seu curriculo</p>
                                <p className="dataDica">26/10/2020</p>
                            </div>
                        </div>
                        <div className="dica">
                            <img src={curriculoImg} alt="Dica1" />
                            <div className="info">
                                <h3>Curriculo</h3>
                                <p className="conteudoDica">Descubra como aperfeiçoar seu curriculo</p>
                                <p className="dataDica">26/10/2020</p>
                            </div>
                        </div>
                        <div className="dica">
                            <img src={curriculoImg} alt="Dica1" />
                            <div className="info">
                                <h3>Curriculo</h3>
                                <p className="conteudoDica">Descubra como aperfeiçoar seu curriculo</p>
                                <p className="dataDica">26/10/2020</p>
                            </div>
                        </div>
                        <div className="dica">
                            <img src={curriculoImg} alt="Dica1" />
                            <div className="info">
                                <h3>Curriculo</h3>
                                <p className="conteudoDica">Descubra como aperfeiçoar seu curriculo</p>
                                <p className="dataDica">26/10/2020</p>
                            </div>
                        </div>
                        <div className="dica">
                            <img src={curriculoImg} alt="Dica1" />
                            <div className="info">
                                <h3>Curriculo</h3>
                                <p className="conteudoDica">Descubra como aperfeiçoar seu curriculo</p>
                                <p className="dataDica">26/10/2020</p>
                            </div>
                        </div>
                    </div>
            </main>

            <Footer />
        </div>
    )
}
export default Dicas;