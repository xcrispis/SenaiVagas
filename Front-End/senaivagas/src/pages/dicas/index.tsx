import React from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header/index';
import './style.css';
import '../../assets/styles/global.css'
import curriculoImg from '../../assets/images/curriculo.png';
function Dicas() {
    return(
        <div>
            <Header/>
            
            <div className="alinhar">
                <div className="titulo">
                     <h1>Dicas</h1>
                </div>
                <div className="allDicas">
                <div className="dica">
                    <img src={curriculoImg} alt="Dica1"/>
                    <div className="info">
                        <h3>Curriculo</h3>
                        <p className="conteudoDica">Descubra como aperfeiçoar seu curriculo</p>
                        <p className="dataDica">26/10/2020</p>
                    </div>
                </div>
                <div className="dica">
                    <img src={curriculoImg} alt="Dica1"/>
                    <div className="info">
                        <h3>Curriculo</h3>
                        <p className="conteudoDica">Descubra como aperfeiçoar seu curriculo</p>
                        <p className="dataDica">26/10/2020</p>
                    </div>
                </div>
                <div className="dica">
                    <img src={curriculoImg} alt="Dica1"/>
                    <div className="info">
                        <h3>Curriculo</h3>
                        <p className="conteudoDica">Descubra como aperfeiçoar seu curriculo</p>
                        <p className="dataDica">26/10/2020</p>
                    </div>
                </div>
                <div className="dica">
                    <img src={curriculoImg} alt="Dica1"/>
                    <div className="info">
                        <h3>Curriculo</h3>
                        <p className="conteudoDica">Descubra como aperfeiçoar seu curriculo</p>
                        <p className="dataDica">26/10/2020</p>
                    </div>
                </div>
                <div className="dica">
                    <img src={curriculoImg} alt="Dica1"/>
                    <div className="info">
                        <h3>Curriculo</h3>
                        <p className="conteudoDica">Descubra como aperfeiçoar seu curriculo</p>
                        <p className="dataDica">26/10/2020</p>
                    </div>
                </div>
                <div className="dica">
                    <img src={curriculoImg} alt="Dica1"/>
                    <div className="info">
                        <h3>Curriculo</h3>
                        <p className="conteudoDica">Descubra como aperfeiçoar seu curriculo</p>
                        <p className="dataDica">26/10/2020</p>
                    </div>
                </div>
                <div className="dica">
                    <img src={curriculoImg} alt="Dica1"/>
                    <div className="info">
                        <h3>Curriculo</h3>
                        <p className="conteudoDica">Descubra como aperfeiçoar seu curriculo</p>
                        <p className="dataDica">26/10/2020</p>
                    </div>
                </div>
                <div className="dica">
                    <img src={curriculoImg} alt="Dica1"/>
                    <div className="info">
                        <h3>Curriculo</h3>
                        <p className="conteudoDica">Descubra como aperfeiçoar seu curriculo</p>
                        <p className="dataDica">26/10/2020</p>
                    </div>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    )}
    export default Dicas;