import React, { useState } from 'react';
import Header from '../../../components/header/index';
import Footer from '../../../components/footer/index';
import Input from '../../../components/input/index';
import Button from '../../../components/button/index';
import Img from '../../../assets/images/imgBanner2.png';
import '../../../assets/styles/global.css';
import './style.css';
import { Link, Switch, useHistory } from 'react-router-dom';

function Login() {
  let history = useHistory();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erroMensagem, setMessagemErro] = useState('');
  const [isLoading, setIsloading] = useState(false);
  const login = () => {
    setIsloading(true);
    const login = {
      Email: email,
      Senha: senha
    }
    fetch('http://localhost:5000/api/login', {
      method: 'POST',
      body: JSON.stringify(login),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(dados => {
        console.log(dados);
        if (dados.token !== undefined || dados.token !== null) {
          console.log('entrou')

          localStorage.setItem('token-SenaiVagas', dados.token);
          
          // Define a variável base64 que vai receber o payload do token
          var base64 = dados.token.split('.')[1];
          
          // convert o token em uma string
          var tokenstring =  window.atob(base64);
          
          // busca o campo "Role" na string e devolve seu valor
          var tipoUser = tokenstring.split(',')[2].split(':')[2];
          let idUser = tokenstring.split(",")[1].split(":")[1];
          //retira as aspas duplas da string
          tipoUser = tipoUser.slice(1, -1);        
          idUser = idUser.slice(1, -1);

          
          localStorage.setItem('permicao', tipoUser);
          localStorage.setItem('idUser', idUser);


          setIsloading(false);
          switch(tipoUser){
            case '1':
              history.push('/vagas');
              break;
            case '2' :
              history.push('/cadastro-vaga');
              break;
            case '3':
              history.push('/dashboard'); 
              break;
          }
        } else {
          setIsloading(false);
          setMessagemErro('Senha ou Email incorretos!')
        }
      })
      .catch(erro => {
        console.log(erro);
        setIsloading(false);
      });
  }


  return (
    <div>
      <Header />

      <div className="alinhar-Login">
        <div className="esquerdaLogin">
          <img src={Img} alt="" />
        </div>
        {
          isLoading === true &&
          <div className="spinner" />
        }

        <div className="direitaLogin">
          <h1>Login</h1>
          <form onSubmit={event => {
            event.preventDefault();
            login();
          }
          }>
            <Input label="E-mail" name="email" placeholder="Insira seu e-mail" onChange={e => setEmail(e.target.value)} />
            <br />
            <Input label="Senha" name="senha" placeholder="Insira sua senha" type="password" onChange={e => setSenha(e.target.value)} />
            <br />
            <p className='mensagemErro'>{erroMensagem}</p>
            <Button value="Entrar" />
            <ul>
              <Link style={{ textDecoration: 'none' }} to="/cadastro-aluno"><li>Aluno não <br /> cadastrado?</li></Link>
              <Link style={{ textDecoration: 'none' }} to="/cadastro-empresa"><li>Candida-te <br /> sua empresa!</li></Link>
            </ul>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Login;