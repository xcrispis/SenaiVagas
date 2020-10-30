import React from 'react';
import './style.css';
import '../../assets/styles/global.css';
import imb from '../../assets/images/logos/beaver (1).png'
import Footer from '../../components/footer';

function Perfil() {
    return (
        <div>
            <main>
                <section  id="lado-esquerdo">
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
                    <p className="dado-usuario"><b>Nome:</b> Marco</p>
                    <p className="dado-usuario"><b>CPF:</b> 123.456.789.12</p>
                    <p className="dado-usuario"><b>Técnico:</b> Analise e Desenvolvimento</p>
                    <p className="dado-usuario"><b>Conhecimentos:</b> Html, Css, Javascript, Typescript, React e VueJs.</p>
                    <p className="dado-usuario"><b>Técnico:</b> Analise e Desenvolvimento</p>
                    <p className="dado-usuario"><b>Técnico:</b> Analise e Desenvolvimento</p>
                    <p className="dado-usuario"><b>Técnico:</b> Analise e Desenvolvimento</p>
                </section>
            </main>

            <Footer/>
        </div>
    )
}

export default Perfil;