import React from 'react';
import Header from '../../components/header/index';
import Footer from '../../components/footer/index';
import Logo from '../../assets/images/sn_icon.svg';
import Button from '../../components/button/index';

import '../../assets/styles/global.css';
import './style.css';


function ViewContrato() {

        return (
        <div>
            <Header/>
            <div className="logos">
                <img className="logo-adm" src={Logo} alt="Logo empresa"/>
            </div>

            <div className="cargo">
                <h2>Desenvolvedor Front-End</h2>
            </div>

            <div className="view-contrato-adm">               

                <div className="dados">
                    <h2>Razão Social</h2>
                    <p>Space Needle Tecnologia LTDA</p>
                </div>

                    <div className="linha"></div>

                <div className="dados">
                    <h2>CNPJ</h2>
                    <p>18.381.466/0001-40</p>                  
                </div>

                    <div className="linha"></div>

                <div className="dados">
                    <h2>Endereço</h2>
                    <p>AV Copacabana</p>
                </div>

                    <div className="linha"></div>

                <div className="dados">
                    <h2>Nome Aluno</h2>
                    <p>Matheus Esteves</p>
                </div>

                    <div className="linha"></div>

                <div className="dados">
                    <h2>Responsável</h2>
                    <p>Responsável Sobrenome</p>
                </div>
                
                    <div className="linha"></div>

                <div className="dados">
                    <h2>Email</h2>
                    <p>estagios@space.com</p>
                </div>

                <div className="linha"></div>

                <div className="dados">
                    <h2>Inicio</h2>
                    <p>01/01/2020</p>
                </div>

                <div className="linha"></div>

                <div className="dados">
                    <h2>Término</h2>
                    <p>01/01/2020</p>
                </div>

                    <div className="linha"></div>

                <div className="dados">
                    <h2>Observações</h2>
                    <div className="teste">
                        <p>Estou escrevendo esse texto apenas para testar como isso vai ficar na visualização</p>
                    </div>
                </div>

                    <div className="linha"></div>

                <div className="dados">
                    <h2>Avaliações</h2>
                    <p>vou inserir um pdf aqui</p>
                </div>

                    <div className="linha"></div>

            </div>
            
            <div className="botao-editar">
                <Button value="EDITAR CONTRATO"/>
            </div>

            <Footer/>
        </div>
    );
}

export default ViewContrato;