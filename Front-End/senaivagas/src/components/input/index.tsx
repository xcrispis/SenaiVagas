  
import React, {InputHTMLAttributes} from 'react';
import '../../Assets/styles/global.css';


interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label: string;
    name: string;
}

const Input:React.FC<InputProps> = ({label, name, ...rest}) => {
    return (
        <div className="padrao-input">
            <label className="label" htmlFor={name}>{label}</label>
            <br/>
            <input className="input" type="text" id={name}{... rest}/>
        </div>
    );
}

export default Input;