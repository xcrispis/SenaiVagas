import React, { useState } from 'react';
import Footer from '../../../components/footer';
import Input from '../../../components/input';
import Header from '../../../components/header';
import Button from '../../../components/button';
import { Link, useHistory } from 'react-router-dom';

import './style.css';
import '../../../assets/styles/global.css';


function Cadastrovaga() {

  let History = useHistory();

  const [titulo, setTitulo] = useState('');
  const [habilidade, setHabilidade] = useState('');
  const [descricao, setDescricao] = useState('');
  // const [areavaga, setAreaVaga] = useState('');

  const cadastrovaga = () => {
    const cadastrovaga = {
      titulo: titulo,
      habilidades: habilidade,
      descricao: descricao,
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
      .then(response => response.json())
      .then(dados => {
        if (dados.status === 201) {
          console.log('OK');
        }
      })
      .catch(erro => console.error(erro));
  }
  return (
    <div>
      <Header>
        <li><Link className="link" to="/cadastro-vaga">Criar Vaga</Link></li>
        <li><Link className="link" to="/perfil-empresa">Meu Perfil</Link></li>
      </Header>
      <main id="main-cadastroVaga">


        <div className="alinhar-cadastroVaga">

          <div className="container-all">

            <form onSubmit={event => {
              event.preventDefault();
              cadastrovaga();
              alert('Vaga Cadastrada');
              History.push("/cadastro-vaga");
            }}>
              <h1>Cadastre sua Vaga</h1>

              <div id="centerBoxCadastroVaga">
                <Input type="text" className='input-cadastroVaga' label="Título da Vaga" name="titulo" placeholder=" Ex: Consultor em segurança da informação " onChange={e => setTitulo(e.target.value)} />

                {/* <Input type="text" label="Area da Vaga:" name="areavaga"  placeholder=" Front-End" onChange={e => setAreaVaga(e.target.value)}/> */}

                <Input type="text" id="descricaoCadastroVaga" className='input-cadastroVaga' label="Descrição da Vaga" name="descricao" placeholder=" Ex: Vaga de segurança da informação, em São Paulo" onChange={e => setDescricao(e.target.value)} />

                <Input type="text" className='input-cadastroVaga' label="Requisítos e Habilidades" name="habilidade" placeholder=" Ex: Experiência em Java " onChange={e => setHabilidade(e.target.value)} />
              </div>


              <div className="botao">
                <Button value="Enviar" />
              </div>


            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Cadastrovaga;      
