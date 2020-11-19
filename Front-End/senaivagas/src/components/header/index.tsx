import React, { useState } from 'react';
import logosBranco from '../../assets/images/logobranco.png';
import './style.css';
import { Link, useHistory } from 'react-router-dom';
import { parseJwt, usuarioAutenticado } from '../../services';

interface HeaderProps{
}
const Header:React.FunctionComponent<HeaderProps> = (props) =>{

    return (
        <div className="header">
            <nav>
                <div className="logos">
                    <img src={logosBranco} alt="logo do senai e do castor"/>
                </div>
                <div className="navigation">
                    <ul className="lista">
                      {props.children}                      
                    </ul>                    
                </div>  
            </nav>
        </div>
    );
}
  
  export default Header;