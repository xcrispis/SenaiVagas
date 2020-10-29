import React from 'react';
import logosBranco from '../../assets/images/logobranco.png';
import './style.css';
import '../../assets/styles/global.css'
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