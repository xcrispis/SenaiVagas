import React from 'react';
import Header from '../../../components/header/index';
import Footer from '../../../components/footer/index';
// import Button from '../../components/button/index';
import Logo from '../../../assets/images/sn_icon.svg';
import { Link } from 'react-router-dom';

import './style.css';
import '../../../assets/styles/global.css';


function Dashboard() {

    // function executarAcao(linha:any) {
    //     linha.style.backgroundColor = "#ff0000";
    // }

    return (
        <div>

            <Header/>

                 <div className="container-dashboard">
                    <div className="contrato">                    
                        <h2>Gerenciar Solicitações</h2>
                        <div className="linha-dashboard"></div>
                    </div>
                    
                    <div className="linha-central"></div>

                    <div className="empresas">
                        <h2>Solicitações de Empresas</h2>
                        <div className="linha-dashboard"></div>
                    </div>                    
                </div>
                
                {/*<div className="row-dashboard">

                    <div className="dados-empresa">
                        <div className="logos">
                            <img className="logo" src={Logo} alt="Logo empresa"/>
                        </div>

                        <div className="apresentacao">
                            <h3>Apresentação</h3>
                            <p>Somos uma empresa com muito interesse em novos talentos, damos um ótimo suporte aos iniciantes da àrea e os possibilitamos crescimento, além de profissional, para maiores cargos na empresa.</p>
                        </div>

                        <div className="contato">
                            <h3>Contato</h3>
                            <p>Rodrigo Soares, CTO 99999-9999 email@email.com</p>
                        </div>
                    </div>

                    <div className="botoes">
                        <div className="aceitar">
                            <Button value="Aceitar"/>
                        </div>

                        <div className="recusar">
                            <Button value="Recusar"/>
                        </div>
                    </div>                    
                </div>

                <div className="try">
                    <div className="divisoria"></div>
                </div>

                <div className="row-dashboard">

                    <div className="dados-empresa">
                        <div className="logos">
                            <img className="logo" src={Logo} alt="Logo empresa"/>
                        </div>

                        <div className="apresentacao">
                            <h3>Apresentação</h3>
                            <p>Somos uma empresa com muito interesse em novos talentos, damos um ótimo suporte aos iniciantes da àrea e os possibilitamos crescimento, além de profissional, para maiores cargos na empresa.</p>
                        </div>

                        <div className="contato">
                            <h3>Contato</h3>
                            <p>Rodrigo Soares, CTO 99999-9999 email@email.com</p>
                        </div>
                    </div>

                    <div className="botoes">
                        <div className="aceitar">
                            <Button value="Aceitar"/>
                        </div>

                        <div className="recusar">
                            <Button value="Recusar"/>
                        </div>
                    </div>                    
                </div>

                <div className="try">
                    <div className="divisoria"></div>
                </div> */}
                
                <div className="ahunaoi">
                    <div className="contratos">                    
                        <div className="logos-dashboard">
                            <img className="logo-dashboard" src={Logo} alt="Logo empresa"/>
                        </div>

                        <div className="cpf-aluno">
                            <h3>Cpf Aluno</h3>
                            <p>123.123.123-12</p>
                        </div>

                        <div className="curso">
                            <h3>Curso</h3>
                            <p>Desenvolvimento de Sistemas</p>
                        </div>

                        <div className="inicio">
                            <h3>Inicio</h3>
                            <p>01/01/2021</p>
                        </div>

                        <div className="termino">
                            <h3>Término Previsto</h3>
                            <p>01/01/2021</p>
                        </div>

                        <div className="status">
                            <h3>Status</h3>
                            <p>Em andamento</p>
                        </div>                    
                    </div>                    
                </div>

                <div className="try">
                    <div className="divisoria"></div>
                </div>
                

                <div className="ahunaoi">
                    <div className="contratos">                    
                        <div className="logos-dashboard">
                            <img className="logo-dashboard" src={Logo} alt="Logo empresa"/>
                        </div>

                        <div className="cpf-aluno">
                            <h3>Cpf Aluno</h3>
                            <p>123.123.123-12</p>
                        </div>

                        <div className="curso">
                            <h3>Curso</h3>
                            <p>Desenvolvimento de Sistemas</p>
                        </div>

                        <div className="inicio">
                            <h3>Inicio</h3>
                            <p>01/01/2021</p>
                        </div>

                        <div className="termino">
                            <h3>Término Previsto</h3>
                            <p>01/01/2021</p>
                        </div>

                        <div className="status">
                            <h3>Status</h3>
                            <p>Em andamento</p>
                        </div>                    
                    </div>                    
                </div>

                <div className="try">
                    <div className="divisoria"></div>
                </div>

             <Footer/>  

        </div>
    );
}

export default Dashboard;