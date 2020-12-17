import React, { useState, useEffect } from 'react';
import Footer from '../../../components/footer';
import Input from '../../../components/input';
import Header from '../../../components/header';
import Button from '../../../components/button';
import { Link, useHistory } from 'react-router-dom';

import './style.css';
import '../../../assets/styles/global.css';

function Cadastrovaga() {

  let history = useHistory();

  const [formasContratacoes, setFormasContratacoes] = useState([]);
  const [formaContratacao, setFormaContratacao] = useState('');

  useEffect(() => {
    listarFormaContratacao();
  }, [])

  const listarFormaContratacao = () => {
    fetch('http://localhost:5000/api/FormasContratacoes', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(dados => {
        setFormasContratacoes(dados);
        console.log(dados);
      })
      .catch(e => console.error(e));

  }

  const [idVaga, setIdVaga] = useState(0);
  const [descricao, setDescricao] = useState('');
  const [habilidades, setHabilidades] = useState('');
  const [cargo, setCargo] = useState('');
  const [AreaVaga, setAreaVaga] = useState('');

  const cadastrarVaga = (idEndereco: any) => {

    let idEmpresa = localStorage.getItem('id-empresa');

    const formVaga = {
      Descricao: descricao,
      Habilidades: habilidades,
      PlanoEstagio: false,
      AreaVaga: AreaVaga,
      Cargo: cargo,
      fkFormaContratacao: formaContratacao,
      fkEmpresa: 1,
      fkEndereco: idEndereco
    }

    const methodVaga = (idVaga === 0 ? 'POST' : 'PUT');

    fetch('http://localhost:5000/api/Vaga', {
      method: methodVaga,
      body: JSON.stringify(formVaga),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(dados => {
        setIdVaga(0);
        console.log(formVaga);
        console.log(idEndereco);
      })
  }

  // const [idEndereco, setIdEndereco] = useState(0);
  const [cep, setCep] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [complemento, setComplemento] = useState('');
  const [bairro, setBairro] = useState('');
  const [uf, setUf] = useState('');
  const [cidade, setCidade] = useState('');
  const [numero, setNumero] = useState('');

  const salvarEndereco = () => {

    const formEndereco = {
      Cep: cep,
      Logradouro: logradouro,
      Bairro: bairro,
      Uf: uf,
      Cidade: cidade,
      Complemento: complemento,
      Numero: numero
    }

    fetch('http://localhost:5000/api/Endereco', {
      method: 'POST',
      body: JSON.stringify(formEndereco),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(dados => {
        console.log(formEndereco);
        cadastrarVaga(dados);
        alert('Vaga cadastrada');
      })
  }

  return (
    <div>
      <Header>
        <li><Link className="link" to="/cadastro-vaga">Cadastrar Vagas</Link></li>
        <li><Link className="link" to="/minhas-vagas-empresa">Minhas Vagas</Link></li>
        <li><Link className="link" to="/perfil-Empresa">Meu Perfil</Link></li>
        <li><Link className="link" to="/">Sair</Link></li>
      </Header>
      <main>
        <div className="center-vaga">
          <h1>Cadastre uma Vaga</h1>
        </div>

        <form onSubmit={event => {
          event.preventDefault();
          salvarEndereco();
        }}>
          <div className="row-vaga">
            <div className="column-vaga">
              <Input type="text" name="cargo" label="Cargo" placeholder="Ex: Desenvolvedor Fron-End" onChange={v => setCargo(v.target.value)} />
              <div className="select">
                <label>Forma Contratação</label>
                <select name="formaContratacao" onChange={f => setFormaContratacao(f.target.value)} value={formaContratacao}>
                  <option value="0" disabled>Selecione</option>
                  {
                    formasContratacoes.map((item: any) => {
                      return <option value={item.idFormaContratacao}>{item.forma}</option>
                    })
                  }
                </select>
              </div>
              <Input type="text" name="cep" label="Cep" onChange={v => setCep(v.target.value)} />
              <Input type="text" name="estado" label="Estado" onChange={v => setUf(v.target.value)} />
              <Input type="text" name="bairro" label="Bairro" onChange={v => setBairro(v.target.value)} />
              <Input type="text" name="bairro" label="Complemento" onChange={v => setComplemento(v.target.value)} />
            </div>

            <div className="column-vaga">
              <Input type="text" name="habilidades" label="Habilidades Desejadas" onChange={v => setHabilidades(v.target.value)} />
              <Input type="text" name="areaVaga" label="Area Vaga" onChange={v => setAreaVaga(v.target.value)} />
              <Input type="text" name="descricao" label="Descricao da Vaga" onChange={v => setDescricao(v.target.value)} />
              <Input type="text" name="endereço" label="Endereço" onChange={v => setLogradouro(v.target.value)} />
              <Input type="text" name="cidade" label="Cidade" onChange={v => setCidade(v.target.value)} />
              <Input type="text" name="number" label="Número" onChange={v => setNumero(v.target.value)} />
            </div>
          </div>

          <div className="btn">
            <Button value="Cadastrar" />
          </div>
        </form>
        <Footer />
      </main>
    </div>
  );
}

export default Cadastrovaga;      
