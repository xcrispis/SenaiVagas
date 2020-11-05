import React from 'react';
import Footer from '../../components/footer';
import Input from '../../components/input';
import Header from '../../components/header';
import Button from '../../components/button';
import './style.css';
import '../../Assets/styles/global.css';


function cadastroVaga() {

    return (
        <div>
            <Header />
            <div className="alinhar">

                <div className="container-all">
                    <div className="centro">
                        <form>
                            <h1>Cadastre sua Vaga</h1>
                            <Input type="text" label="Título da Vaga:" name="titulovaga" placeholder=" Ex: Consultor em segurança da informação " />
                            <br></br>
                            <Input type="email" label="E-mail para contato:" name="email"  placeholder=" Ex: email@gmail.com "/>
                            <br></br>
                            <Input type="text" label="Descrição da vaga:" name="descricaovaga"  placeholder=" Ex: Vaga de segurança da informação, em São Paulo"/>
                            <br></br>
                            <Input type="text" label="Requisítos e habilidades:" name="requisitos"  placeholder=" Ex: Experiência em Java " />
                            <br></br>
                            <Input type="text" label="Sobre a empresa:" name="sobre"  placeholder=" Ex: Empresa especializada em segurança da informação "/>
                            <br></br>
                            <label>Área da Vaga</label>
                            <br />
                            <select id="permissao">
                                <option value="" disabled selected>Selecione</option>
                                <option value="backend">Back-End</option>
                                <option value="frontend">Front-End</option>
                                <option value="redes">Redes</option>
                            </select>
                            <div className="botao">
                                <Button value="Enviar" />
                            </div>
                            <br></br>
                            <br></br>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default cadastroVaga;