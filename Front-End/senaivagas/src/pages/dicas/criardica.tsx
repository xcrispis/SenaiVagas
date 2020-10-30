import React from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header/index';
import './style.css';
import '../../assets/styles/global.css'
function CriarDica() {
    return(
    <div>
        <Header></Header>
        <div className="alinhar">
            <div className="titulo">
                <h1>Criar Dica</h1>
            </div>
            <form action="">
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
            </form>
        </div>
        <Footer />
    </div>
    )
}
export default CriarDica;