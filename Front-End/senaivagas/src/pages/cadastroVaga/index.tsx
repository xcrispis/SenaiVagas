import React, {useState} from 'react';
import Footer from '../../components/footer';
import Input from '../../components/input';
import Header from '../../components/header';
import Button from '../../components/button';
import { useHistory } from 'react-router-dom';

import './style.css';
import '../../assets/styles/global.css';


function Cadastrovaga(){

    let History = useHistory();

    const [titulo, setTitulo] = useState('');
    const [habilidade, setHabilidade] = useState('');
    const [descricao, setDescricao] = useState('');
    // const [areavaga, setAreaVaga] = useState('');
  
    const cadastrovaga = () => {
      const cadastrovaga ={
        titulo: titulo,
        habilidades: habilidade,
        descricao : descricao,
        planoestagio: true,
        // FkEmpresa:1,
        // FkFormaContratacao:2,
        // FkEndereco:2
        // areavaga : areavaga,
      }
    
  
      fetch('http://localhost:5000/api/Vaga', {
        method: 'POST',
        body: JSON.stringify(cadastrovaga),
        headers: {
          'Content-type': 'application/json',
        //   authorization: 'Bearer ' + localStorage.getItem('token-SenaiVagas')
        }
      })
      .then( response => response.json())
      .then( dados => {
        if(dados.status === 201)
        {
          console.log('OK');
        }})     
      .catch(erro => console.error(erro));
    }
    return (
        <div>
            <Header />
            <div className="alinhar">

                <div className="container-all">
                    <div className="centro">
                        <form onSubmit={ event => {
                        event.preventDefault();
                        cadastrovaga();
                        alert('Vaga Cadastrada');
                        History.push("/");
                        }}>
                            <h1>Cadastre sua Vaga</h1>
                            <Input type="text" className='label-cadastroVaga' label="Título da Vaga:" name="titulo" placeholder=" Ex: Consultor em segurança da informação " onChange={e => setTitulo(e.target.value)}/>
                            <br></br>
                            {/* <Input type="text" label="Area da Vaga:" name="areavaga"  placeholder=" Front-End" onChange={e => setAreaVaga(e.target.value)}/> */}
                            <br></br>
                            <Input type="text" className='label-cadastroVaga' label="Descrição da vaga:" name="descricao"  placeholder=" Ex: Vaga de segurança da informação, em São Paulo" onChange={e => setDescricao(e.target.value)}/>
                            <br></br>
                            <Input type="text" className='label-cadastroVaga' label="Requisítos e habilidades:" name="habilidade"  placeholder=" Ex: Experiência em Java " onChange={e => setHabilidade(e.target.value)}/>
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

export default Cadastrovaga;      
