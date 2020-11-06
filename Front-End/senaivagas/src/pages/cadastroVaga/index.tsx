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
    const [habilidade, setHabilidade] = useState('');
    const [descricao, setDescricao] = useState('');
    const [areavaga, setAreaVaga] = useState('');
  
    const cadastroVaga = () => {
      const cadastroVaga ={
        titulo: titulo,
        habilidade: habilidade,
        descricao : descricao,
        areavaga : areavaga,
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
          alert('Insira as informações');
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
                        <form onSubmit={ event => {
                  event.preventDefault();
                  cadastroVaga();
                }}>
                            <h1>Cadastre sua Vaga</h1>
                            <Input type="text" label="Título da Vaga:" name="titulo" placeholder=" Ex: Consultor em segurança da informação " />
                            <br></br>
                            <Input type="text" label="Area da Vaga:" name="areavaga"  placeholder=" Front-End"/>
                            <br></br>
                            <Input type="text" label="Descrição da vaga:" name="descricao"  placeholder=" Ex: Vaga de segurança da informação, em São Paulo"/>
                            <br></br>
                            <Input type="text" label="Requisítos e habilidades:" name="habilidade"  placeholder=" Ex: Experiência em Java " />
                            <br />               
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