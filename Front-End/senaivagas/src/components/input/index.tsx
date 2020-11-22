import React, {InputHTMLAttributes} from 'react';

import '../../assets/styles/global.css';
import './style.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label: string;
    name: string;
}

const Input:React.FC<InputProps> = ({label, name, ...rest}) => {
    return (
        <div className="padrao-input">
            <label className="label-inputComponent" htmlFor={name}>{label}</label>
            <input className="input-component" type="text" id={name}{... rest}/>
        </div>
    );
}

export default Input;