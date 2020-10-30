import React from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header/index';
import Input from '../../components/input/index';
import './style.css';
import './stylecriardica.css'
import '../../assets/styles/global.css';
function CriarDica() {
    return(
    <div>
        <Header></Header>
        <div className="alinhar">
            <div className="titulo">
                <h1>Criar Dica</h1>
            </div>
            <form>
                <Input label="Título" name="Título" placeholder="Insira aqui o título de sua dica" />
            </form>
        </div>
        <Footer />
    </div>
    )
}
export default CriarDica;