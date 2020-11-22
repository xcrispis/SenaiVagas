import React, { useState } from 'react';
import Header from '../../components/header/index';
import Footer from '../../components/footer/index';
import Input from '../../components/input/index';
import Button from '../../components/button/index';
import Img from '../../assets/images/imgBanner2.png';
import '../../assets/styles/global.css';
import './style.css';
import { Link, useHistory } from 'react-router-dom';
import { parseJwt } from '../../services';

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
        if (dados.token !== undefined || dados.token !== null) {
          let idUser = parseJwt().jti;
          localStorage.setItem('permissao', dados.Permissao);
          localStorage.setItem('token-SenaiVagas', dados.token);
          console.log(dados.token);
          console.log(idUser);
          setIsloading(false);
          history.push('/dashboard');
          // if (idUser == 1) {
          //   console.log(idUser);
          //   history.push('/vagas');
          // }
          // if (idUser == 2) {
          //   console.log(idUser);  
          //   history.push('/cadastro-vaga');
          // }
          // if (idUser == 3) {
          //   console.log(idUser);
          //   history.push('/dashboard'); 
          // }
          // else {
          //   console.log(erroMensagem);
          // }
        } else {
          setIsloading(false);
          setMessagemErro('Senha ou Email incorretos!')
        }
      })
      .catch(erro => {
        setMessagemErro(erro);
        setIsloading(false);
      });
  }


  return (
    <div>
      <Header />

      <div className="alinhar">
        <div className="esquerda">
          <img src={Img} alt="" />
        </div>
        {
          isLoading === true &&
          <div className="spinner" />
        }

        <div className="direita">
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