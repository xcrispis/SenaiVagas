import React, {InputHTMLAttributes} from 'react';
import './style.css';
import '../../assets/styles/global.css'
import lupa from '../../assets/images/lupa-icon.png.png'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
 onchange?: any;
 onclick?: any;
}

const CampoDeBusca: React.FC<InputProps> =({onchange, onclick, ...rest}) => {
    return (
        <div className="div-campo-busca">
            <input onChange={onchange} placeholder="Busque palavras-chave..." type="text" className="campo-de-busca"/>
            <img onClick={onclick} src={lupa} alt="" id="img-lupa"/>
        </div>
    )
}

export default CampoDeBusca;