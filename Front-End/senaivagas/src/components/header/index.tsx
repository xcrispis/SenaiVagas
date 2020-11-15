import React, { useState } from 'react';
import logosBranco from '../../assets/images/logobranco.png';
import './style.css';
import { Link, useHistory } from 'react-router-dom';
import { parseJwt, usuarioAutenticado } from '../../services';

interface HeaderProps{
}
const Header:React.FunctionComponent<HeaderProps> =(props) =>{

    let History = useHistory();

    const logout = () => {
        localStorage.removeItem('token-SenaiVagas');
        History.push('/');
    }

    const menu = () => {
        const token = localStorage.getItem('token-SenaiVagas');
        let idRole = parseJwt().roles;
        if (token === undefined || token === null) {
            return (
                <div className="navigation">
                    <nav>
                        <ul className="lista">                            
                            {
                                <li><Link to="/login">Login</Link></li>
                            }
                        </ul>
                    </nav>
                </div>
            );
        } else {
            if (idRole === 1) {
                return (
                    <div className="navigation">
                        <nav>
                            <ul className="lista">
                                <li><Link to="/minhas-vagas">Minhas Vagas</Link></li>
                                <li><Link to="/dicas">Dicas</Link></li>
                                <li><Link to="/perfil">Meu Perfil</Link></li>
                                <li><Link to="" onClick={event => {
                                    event.preventDefault();
                                    logout();
                                }}></Link>Sair</li>
                            </ul>
                        </nav>
                    </div>
                );
            } if (idRole === 2) {
                return (
                    <div className="navigation">
                        <nav>
                            <ul className="lista">
                                <li><Link to="/minhas-vagas">Cadastrar Vaga</Link></li>
                                <li><Link to="/dicas">Minhas Vagas</Link></li>
                                <li><Link to="/perfil">Candidatos</Link></li>
                                <li><Link to="" onClick={event => {
                                    event.preventDefault();
                                    logout();
                                }}></Link>Sair</li>
                            </ul>
                        </nav>
                    </div>
                );
            } if (idRole === 3) {
                return (
                    <div className="navigation">
                        <nav>
                            <ul className="lista">
                                <li><Link to="/dashboard">Dahsboard</Link></li>                                
                                <li><Link to="" onClick={event => {
                                    event.preventDefault();
                                    logout();
                                }}></Link>Sair</li>
                            </ul>
                        </nav>
                    </div>
                );
            }
        }
    } 

    return (
        <div className="header">
            <header>
                <div className="logos">
                    <img src={logosBranco} alt="logo do senai e do castor"/>
                </div>
                {menu()}
            </header>
        </div>
          );
        }
  
  export default Header;