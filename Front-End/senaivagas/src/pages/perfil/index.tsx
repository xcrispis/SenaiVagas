import React from 'react';
import './style.css';
import '../../assets/styles/global.css';
import imb from '../../assets/images/person_110935.png'
import Footer from '../../components/footer';

function Perfil() {
    return (
        <div>
            <main>
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

                    <div id="container-dados-esq-dir">
                        <div className="lado-direito-direita">
                            <p className="dado-usuario"><b>Nome:</b> Marco Ferreira Basile</p>
                            <p className="dado-usuario"><b>Telefone:</b> 11912345678</p>
                            <p className="dado-usuario"><b>CPF:</b> 119123456-78</p>
                            <p className="dado-usuario"><b>Email:</b> gorila@hotmail.com</p>
                        </div>

                        <div className="lado-direito-esquerda">
                            <p className="dado-usuario"><b>Endereço:</b> Rua Jorge e Matheus, 311.</p>
                            <p className="dado-usuario"><b>Situação:</b> Em busca de emprego.</p>
                            <p className="dado-usuario"><b>Github:</b> https://github.com/xcrispis</p>
                            <p className="dado-usuario"><b>Linkedin:</b> https://github.com/xcrispis</p>
                        </div>
                    </div>

                    <div id="apresentacao-txt-box">
                        <div><b>Descrição</b></div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Praesent neque justo, varius sed neque ac, ultricies
                            hendrerit ligula. Duis tortor nibh, bibendum id feugiat ac,
                            ultrices id mauris.
                             </p>
                    </div>


                </section>
            </main>

            <Footer />
        </div>
    )
}

export default Perfil;