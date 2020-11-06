import React, { useState } from 'react';
import logosBranco from '../../assets/images/solidbranco.png';
import './style.css';
interface HeaderProps{
}
const Header:React.FunctionComponent<HeaderProps> =(props) =>{
    return (
        <div className="header">
            <header>
                <div className="logos">
                    <img src={logosBranco} alt="logo do senai e do castor"/>
                </div>
                <div className="navigation">
                    <ul className="lista">
                      {props.children}
                    </ul>
                </div>
            </header>
        </div>
          );
        }
  
  export default Header;