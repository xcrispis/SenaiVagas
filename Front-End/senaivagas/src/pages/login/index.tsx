import React from 'react';
import Header from '../../components/header/index';
import Footer from '../../components/footer/index';
import Input from '../../components/input/index';
import Button from '../../components/button/index';
import Img from '../../assets/images/curriculo.png';
import '../../assets/styles/global.css';
import './style.css';

function Login() {
    return(
    <div>
        <Header></Header>
        <div className="alinhar">
            <div className="esquerda">
                <img src={Img} alt=""/>
            </div>
            <div className="direita">
                <h1>Login</h1>
                <form>
                    <Input label="E-mail" name="email" placeholder="Insira seu e-mail"/>
                    <Input label="Senha" name="senha" placeholder="Insira sua senha"/>
                    <Button value="Entrar"/>
                </form>
            </div>
        </div>
    </div>
    )
}
export default Login;