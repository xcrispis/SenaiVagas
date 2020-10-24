import React from 'react';
import logosBranco from '../../Assets/images/logobranco.png';
import './style.css';
function Header() {
    return (
        <div className="header">
            <header>
                <div className="logos">
                    <img src={logosBranco} alt="logo do senai e do castor"/>
                </div>
                <div className="navigation">
                    <ul className="lista">
                      <li>Login</li>
                      <li>Cadastre-se</li>
                    </ul>
                </div>
            </header>
        </div>
          );
        }
  
  export default Header;