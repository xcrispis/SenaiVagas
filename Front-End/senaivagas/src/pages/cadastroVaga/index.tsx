import React from 'react';
import React, {useState} from 'react';
import Footer from '../../components/footer';
import Input from '../../components/input';
import Header from '../../components/header';
import Button from '../../components/button';
import './style.css';
import '../../Assets/styles/global.css';


function cadastroVaga() {
    const [titulo, setTitulo] = useState('');
    const [email, setEmail] = useState('');
  
    const cadastroVaga = () => {
      const cadastroVaga ={
        titulo: titulo,
        email: email,
      }
    
  
      fetch('http://localhost:5000/api/cadastrovaga', {
        method: 'POST',
        body: JSON.stringify(cadastroVaga),
        headers: {
          'content-type': 'application/json'
        },
      })
  
      .then (response => response.json())
      .then (dados => {
        if (dados.token !== undefined) {
          localStorage.setItem('token-SenaiVagas', dados.token)
        }
        else{
          alert('Senha ou e-mail inválido');
        }
      })
      .catch(erro => console.error(erro))
    }

    return (
        <div>
            <Header />
            <div className="alinhar">

                <div className="container-all">
                    <div className="centro">
                        <form>
                            <h1>Cadastre sua Vaga</h1>
                            <Input type="text" label="Título da Vaga:" name="titulo" placeholder=" Ex: Consultor em segurança da informação " />
                            <br></br>
                            <Input type="email" label="E-mail para contato:" name="email"  placeholder=" Ex: email@gmail.com "/>
                            <br></br>
                            <Input type="text" label="Descrição da vaga:" name="descricao"  placeholder=" Ex: Vaga de segurança da informação, em São Paulo"/>
                            <br></br>
                            <Input type="text" label="Requisítos e habilidades:" name="requisito"  placeholder=" Ex: Experiência em Java " />
                            <br></br>
                            <Input type="text" label="Endereço:" name="endereço"  placeholder=" Ex: Rua Costa Aguiar "/>
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